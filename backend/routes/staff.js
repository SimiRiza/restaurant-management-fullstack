const express = require("express");
const router = express.Router();
const db = require("../db");

// add application
router.post("/", (req, res) => {
    const { name, role } = req.body;

    db.query(
        "INSERT INTO staff_applications (name, role) VALUES (?, ?)",
        [name, role],
        (err) => {
            if (err) return res.send(err);
            res.send("Application submitted");
        }
    );
});

// get all
router.get("/", (req, res) => {
    db.query("SELECT * FROM staff_applications", (err, result) => {
        if (err) return res.send(err);
        res.json(result);
    });
});

module.exports = router;