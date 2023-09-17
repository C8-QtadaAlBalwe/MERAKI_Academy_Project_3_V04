const { pool } = require("../models/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// This function creates (new user)
const register = async (req, res) => {
  const { firstName, lastName, age, country, email, password, role_id } =
    req.body;
  const lower_email = email.toLowerCase();
  const hash_password = await bcrypt.hash(password, 10);
  const placeholder = [
    firstName,
    lastName,
    age,
    country,
    lower_email,
    hash_password,
    role_id,
  ];

  pool
    .query(
      `INSERT INTO users (firstName,lastName,age,country,email,password,role_id) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *;`,
      placeholder
    )
    .then((results) => {
      res.status(201).json({
        success: true,
        message: "Account created successfully",
        role: results.rows,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: "The email already exists",
        err: err.message,
      });
    });
};

const login = (req, res) => {
  const password = req.body.password;
  const email = req.body.email.toLowerCase();
  placeholder=[email]
  pool
    .query(`SELECT * FROM users WHERE email=$1`,placeholder)
    .then(async (results) => {
      if (!results.rows.length) {
        return res.status(403).json({
          success: false,
          massege:
            "The email doesn't exist or The password you’ve entered is incorrect",
        });
      }
      try {
        const valid = await bcrypt.compare(password, results.rows[0].password);
        if (!valid) {
          return res.status(403).json({
            success: false,
            massege:
              "The email doesn't exist or The password you’ve entered is incorrect",
          });
        }
        const payload = {
          userId: results.rows[0]._id,
          country: results.rows[0].country,
          role: results.rows[0].role_id,
        };
        const options = {
          expiresIn: "60m",
        };
        const token = jwt.sign(payload, process.env.SEACRET, options);
        res.status(200).json({
          success: true,
          message: `Valid login credentials`,
          token: token,
        });
      } catch (error) {
        throw new Error(error.message);
      }
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server Error`,
        err: err.message,
      });
    });
};

module.exports = {
  register,login
};
