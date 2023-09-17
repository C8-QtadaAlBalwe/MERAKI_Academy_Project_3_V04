const {pool}=require("../models/db")

// This function creates (new user)
const register = (req, res) => {
  const {firstName,lastName,age,country,email,password,role_id,is_deleted}=req.body;
  const  placeholder=[firstName,lastName,age,country,email,password,role_id,is_deleted];
  
};



const login = (req, res) => {
    //TODO: write your code here
  };
  

module.exports = {
  
};
