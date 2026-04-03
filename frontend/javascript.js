document.addEventListener("DOMContentLoaded", () => {

    console.log("Connected to Backend 🚀");

    let total = 0;
    let cart = [];

    // =======================
    // 1. ADD CUSTOMER (DB)
    // =======================
    const customerForm = document.querySelector("#customers form");

    customerForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const inputs = customerForm.querySelectorAll("input");
        const name = inputs[0].value;
        const email = inputs[1].value;
        const phone = inputs[2].value;

        if (name === "" || email === "" || phone === "") {
            alert("Fill all fields");
            return;
        }

        fetch("http://localhost:5000/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, phone })
        })
        .then(res => res.text())
        .then(data => {
            alert(data);
            customerForm.reset();
        });
    });


    // =======================
    // 2. LOAD PRODUCTS (DB)
    // =======================
    function loadProducts() {
        fetch("http://localhost:5000/products")
        .then(res => res.json())
        .then(data => {
            const menu = document.querySelector("#menu .grid");
            menu.innerHTML = "";

            data.forEach(item => {
                const card = document.createElement("div");
                card.classList.add("card");

                card.innerHTML = `
                    <h3>${item.name}</h3>
                    <p>₹${item.price}</p>
                    <button>Add</button>
                `;

                const button = card.querySelector("button");

                button.addEventListener("click", () => {
                    total += item.price;

                    cart.push({
                        name: item.name,
                        price: item.price
                    });

                    updateBillUI();
                    alert(item.name + " added!");
                });

                menu.appendChild(card);
            });
        });
    }

    loadProducts();


    // =======================
    // 3. UPDATE BILL UI 🔥
    // =======================
    function updateBillUI() {
        const billBox = document.querySelector("#billing .card");

        let itemsHTML = cart.map(i => 
            `<p>${i.name} - ₹${i.price}</p>`
        ).join("");

        billBox.innerHTML = `
            <h3>Bill</h3>
            ${itemsHTML}
            <p><b>Total: ₹${total}</b></p>
            <button id="payBtn">Pay Now</button>
        `;

        document.getElementById("payBtn").addEventListener("click", payNow);
    }


    // =======================
    // 4. PAYMENT FLOW (DB)
    // =======================
    function payNow() {

        if (total === 0) {
            alert("No items added!");
            return;
        }

        fetch("http://localhost:5000/orders", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                user_id: 1,
                total: total
            })
        })
        .then(res => res.json())
        .then(data => {

            const orderId = data.orderId;

            fetch("http://localhost:5000/payments", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    order_id: orderId,
                    amount: total
                })
            })
            .then(() => {
                alert("Payment Done ✅");

                // reset
                cart = [];
                total = 0;
                updateBillUI();
            });

        });
    }


    // =======================
    // 5. RESERVATION (UI)
    // =======================
   // =======================
// RESERVATION (DB FIXED)
// =======================

const reservationForm = document.querySelector("#reservations form");
if (reservationForm) {
    reservationForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const inputs = reservationForm.querySelectorAll("input, select");

        const name = inputs[0].value;
        const date = inputs[1].value;
        const time = inputs[2].value;
        const people = parseInt(inputs[3].value);

        fetch("http://localhost:5000/reservations", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, date, time, people })
        })
        .then(res => res.text())
        .then(msg => {
            alert(msg);
            reservationForm.reset();
        });
    });
}


    // =======================
    // 6. STAFF (NOW DB 🔥)
    // =======================
    const staffForm = document.querySelector("#staff form");

    if (staffForm) {
        staffForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const inputs = staffForm.querySelectorAll("input");
            const name = inputs[0].value;
            const role = inputs[1].value;

            if (name === "" || role === "") {
                alert("Fill all fields");
                return;
            }

            fetch("http://localhost:5000/staff", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, role })
            })
            .then(res => res.text())
            .then(data => {
                alert(data);
                staffForm.reset();
            });
        });
    }

});