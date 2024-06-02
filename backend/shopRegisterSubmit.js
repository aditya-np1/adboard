const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const mysql = require("mysql");

// Connect to MySQL database (replace with your credentials)
const db = mysql.createConnection({
  host: "root",
  password: "mahantswami1933",
  database: "adboard",
});

// Parse form data middleware
router.use(bodyParser.urlencoded({ extended: false }));

// Route for handling form submission
router.post("/app/shop-register", (req, res) => {
  const {
    shop_id,
    name,
    district,
    state,
    address,
    pincode,
    type,
    avgusers,
    importance,
  } = req.body;

  // SQL query to insert shop data into the adboard table
  const sql = `INSERT INTO adboard (shop_id, name, district, state, address, pincode, type, avgusers, importance) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  db.query(
    sql,
    [
      shop_id,
      name,
      district,
      state,
      address,
      pincode,
      type,
      avgusers,
      importance,
    ],
    (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send("Error saving shop data");
      } else {
        res.send("Shop data saved successfully!");
      }
    }
  );
});

module.exports = router; // Export the router for mounting
