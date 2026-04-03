const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "simi1407",
    database: "shopDB"
});

db.connect((err) => {
    if (err) throw err;
    console.log("DB Connected ✅");
});

module.exports = db;