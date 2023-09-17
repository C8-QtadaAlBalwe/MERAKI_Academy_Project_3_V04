const { pool } = require("../models/db");

// This function creates new role
const createNewRole = (req, res) => {
  const { role } = req.body;
  const placeholder = [role];

  pool
    .query(`INSERT INTO roles (role) VALUES ($1) RETURNING *;`, placeholder)
    .then((results) => {
      res
        .status(201)
        .json({
          success: true,
          massage: "Role created successfully",
          role: results.rows,
        })
        .catch((err) => {
          res.status(500).json({
            success: false,
            massage: "Server error",
            err: err.massage,
          });
        });
    });
};

// This function creates new permission
const createNewPermission = (req, res) => {
  //TODO: write your code here
};

// This function creates new role permission
const createNewRolePermission = (req, res) => {
  //TODO: write your code here
};

module.exports = {
  createNewRole,
};
