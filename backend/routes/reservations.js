const express = require("express");
const router = express.Router();
const db = require("../db");

// add reservation
router.post("/", (req, res) => {
    const { name, date, time, people } = req.body;

    db.query(
        "INSERT INTO reservations (name, date, time, people) VALUES (?, ?, ?, ?)",
        [name, date, time, people],
        (err) => {
            if (err) return res.send(err);
            res.send("Reservation added");
        }
    );
});

// get all reservations
router.get("/", (req, res) => {
    db.query("SELECT * FROM reservations", (err, result) => {
        if (err) return res.send(err);
        res.json(result);
    });
});

module.exports = router;