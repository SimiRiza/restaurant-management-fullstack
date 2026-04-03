const express = require("express");
const router = express.Router();
const db = require("../db");

// Make payment
router.post("/", (req, res) => {
    const { order_id, amount } = req.body;

    db.query(
        "INSERT INTO payments (order_id, amount, status) VALUES (?, ?, 'Paid')",
        [order_id, amount],
        (err, result) => {
            if (err) return res.send(err);
            res.send("Payment done");
        }
    );
});

// Report (admin)
router.get("/report", (req, res) => {
    db.query(
        "SELECT SUM(amount) AS total_sales FROM payments",
        (err, result) => {
            if (err) return res.send(err);
            res.json(result);
        }
    );
});

module.exports = router;