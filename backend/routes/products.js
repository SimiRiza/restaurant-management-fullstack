const express = require("express");
const router = express.Router();
const db = require("../db");

// Get all products
router.get("/", (req, res) => {
    db.query("SELECT * FROM products", (err, result) => {
        if (err) return res.send(err);
        res.json(result);
    });
});

// Admin add product
router.post("/", (req, res) => {
    const { name, price } = req.body;

    db.query(
        "INSERT INTO products (name, price) VALUES (?, ?)",
        [name, price],
        (err, result) => {
            if (err) return res.send(err);
            res.send("Product added");
        }
    );
});
// delete product
router.delete("/:id", (req, res) => {
    const id = req.params.id;

    db.query(
        "DELETE FROM products WHERE id = ?",
        [id],
        (err) => {
            if (err) return res.send(err);
            res.send("Product deleted");
        }
    );
});
module.exports = router;