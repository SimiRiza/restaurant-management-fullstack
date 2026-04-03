const express = require("express");
const router = express.Router();
const db = require("../db");

// Create order
router.post("/", (req, res) => {
    const { user_id, total } = req.body;

    db.query(
        "INSERT INTO orders (user_id, total, status) VALUES (?, ?, 'Placed')",
        [user_id, total],
        (err, result) => {
            if (err) return res.send(err);
            res.json({ orderId: result.insertId });
        }
    );
});

// Get orders
router.get("/", (req, res) => {
    db.query("SELECT * FROM orders", (err, result) => {
        if (err) return res.send(err);
        res.json(result);
    });
});

module.exports = router;