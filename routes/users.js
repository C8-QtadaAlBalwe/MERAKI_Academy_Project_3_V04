const express = require("express");
const userRouter = express.Router();
// Import users controllers
const {register,login}=require("../controllers/users");


module.exports = userRouter;

userRouter.post("/register",register);
userRouter.post("/login",login);
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