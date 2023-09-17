const express = require("express");
const userRouter = express.Router();
// Import users controllers
const {register}=require("../controllers/users");


module.exports = userRouter;

userRouter.post("/register",register);
/*
 * Testing Object:
{
  "firstName": "Sara",
  "lastName": "Ahmad",
  "age": 29,
  "country": "Jordan",
  "email":"sara.alahmad@gmai.com",
  "password": "123456",
  "role":"1"
}
*/