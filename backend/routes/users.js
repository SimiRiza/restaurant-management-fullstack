const express = require("express");
const router = express.Router();
const db = require("../db");

// Add user
router.post("/", (req, res) => {
    const { name, email, phone } = req.body;

    db.query(
        "INSERT INTO users (name, email, phone) VALUES (?, ?, ?)",
        [name, email, phone],
        (err, result) => {
            if (err) return res.send(err);
            res.send("User added");
        }
    );
});

// Get users
router.get("/", (req, res) => {
    db.query("SELECT * FROM users", (err, result) => {
        if (err) return res.send(err);
        res.json(result);
    });
});

module.exports = router;