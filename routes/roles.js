const express = require("express");

const {createNewRole,createNewPermission,createNewRolePermission}=require("../controllers/roles");
// Create roles router
const roleRouter = express.Router();

roleRouter.post("/",createNewRole);
roleRouter.post("/Permission",createNewPermission);
roleRouter.post("/RolePermission",createNewRolePermission);
module.exports = roleRouter;


