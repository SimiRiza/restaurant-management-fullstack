const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/staff", require("./routes/staff"));
app.use("/reservations", require("./routes/reservations"));

app.use("/users", require("./routes/users"));
app.use("/products", require("./routes/products"));
app.use("/orders", require("./routes/orders"));
app.use("/payments", require("./routes/payments"));

app.listen(5000, () => {
    console.log("Server running on port 5000 🚀");
});