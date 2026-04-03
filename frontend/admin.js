// =======================
// LOAD ALL DATA 🔥
// =======================
function loadAllData() {

    // PRODUCTS (with delete)
    fetch("http://localhost:5000/products")
    .then(res => res.json())
    .then(data => {
        document.getElementById("products").innerHTML =
           data.map(p => 
    `<div class="card">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
        <button onclick="deleteProduct(${p.id})">Delete</button>
    </div>`
).join("");
    });

    // USERS
    fetch("http://localhost:5000/users")
    .then(res => res.json())
    .then(data => {
        document.getElementById("users").innerHTML =
            data.map(u => 
    `<div class="card">
        <h3>👤 ${u.name}</h3>
        <p>${u.email}</p>
    </div>`
).join("");
    });

    // ORDERS
    fetch("http://localhost:5000/orders")
    .then(res => res.json())
    .then(data => {
        document.getElementById("orders").innerHTML =
           data.map(o => 
    `<div class="card">
        <h3>📦 Order #${o.id}</h3>
        <p>₹${o.total}</p>
        <p>Status: ${o.status}</p>
    </div>`
).join("");
    });

    // PAYMENTS
    fetch("http://localhost:5000/payments/report")
    .then(res => res.json())
    .then(data => {
        document.getElementById("payments").innerHTML =
            `<p>💳 Total Sales: ₹${data[0].total_sales}</p>`;
    });

    // STAFF
    fetch("http://localhost:5000/staff")
    .then(res => res.json())
    .then(data => {
        document.getElementById("staff").innerHTML =
           data.map(s => 
    `<div class="card">
        <h3>🧑‍💼 ${s.name}</h3>
        <p>${s.role}</p>
    </div>`
).join("");
    });

    // RESERVATIONS
    fetch("http://localhost:5000/reservations")
    .then(res => res.json())
    .then(data => {
        document.getElementById("reservations").innerHTML =
            data.map(r => 
    `<div class="card">
        <h3>📅 ${r.name}</h3>
        <p>${r.date}</p>
        <p>${r.time}</p>
        <p>${r.people} People</p>
    </div>`
).join("");
    });
}


// =======================
// ADD PRODUCT 🔥
// =======================
window.addProduct = function() {
    const name = document.getElementById("pname").value;
    const price = document.getElementById("pprice").value;

    if (!name || !price) {
        alert("Enter product details");
        return;
    }

    fetch("http://localhost:5000/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, price })
    })
    .then(res => res.text())
    .then(msg => {
        alert(msg);

        document.getElementById("pname").value = "";
        document.getElementById("pprice").value = "";

        loadAllData(); // refresh instantly
    });
};


// =======================
// DELETE PRODUCT 🔥
// =======================
window.deleteProduct = function(id) {

    if (!confirm("Delete this product?")) return;

    fetch(`http://localhost:5000/products/${id}`, {
        method: "DELETE"
    })
    .then(res => res.text())
    .then(msg => {
        alert(msg);
        loadAllData(); // refresh
    });
};


// =======================
// INITIAL LOAD + AUTO REFRESH
// =======================
loadAllData();
setInterval(loadAllData, 3000);