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
  const { permission  } = req.body;
  const placeholder = [permission];

  pool
    .query(`INSERT INTO permissions (permission) VALUES ($1) RETURNING *;`, placeholder)
    .then((results) => {
      res
        .status(201)
        .json({
          success: true,
          massage: "permission created successfully",
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

// This function creates new role permission
const createNewRolePermission = (req, res) => {
  const { role_id,permission_id  } = req.body;
  const placeholder = [role_id,permission_id ];

  pool
    .query(`INSERT INTO role_permission (role_id,permission_id) VALUES ($1,$2) RETURNING *;`, placeholder)
    .then((results) => {
      res
        .status(201)
        .json({
          success: true,
          massage: " role permission created successfully",
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

module.exports = {
  createNewRole,createNewPermission,createNewRolePermission
};
