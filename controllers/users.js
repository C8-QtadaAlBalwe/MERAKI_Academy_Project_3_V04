const {pool}=require("../models/db")
const bcrypt = require("bcrypt");
// This function creates (new user)
const register = async(req, res) => {
  const {firstName,lastName,age,country,email,password,role_id}=req.body;
  const new_email = email.toLowerCase();
  const  hash_password = await bcrypt.hash(password, 10);
  const  placeholder =[firstName,lastName,age,country,new_email,hash_password,role_id];


  pool
  .query(`INSERT INTO users (firstName,lastName,age,country,email,password,role_id) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *;`, placeholder)
  .then((results) => {
    res
      .status(201)
      .json({
        success: true,
        message: "Account created successfully",
        role: results.rows,
      }) 
  }).catch((err) => {
    res.status(500).json({
      success: false,
      message: "The email already exists",
      err: err.message,
    });
  });;
};



const login = (req, res) => {
    //TODO: write your code here
  };
  

module.exports = {
  register
};
