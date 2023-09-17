const jwt = require("jsonwebtoken");
// This function checks if the user logged in
const authentication = (req, res, next) => {
  try{
    if(!req.headers.authorization){
      return res.status(403).json({
        success:false,
        massage:`Forbidden`,
      });
    }
      const token =req.headers.authorization.split(" ").pop();

      jwt.verify(token,process.env.SEACRET,(err,results)=>{
        if(err){
          res.status(403).json({
            success:false,
            massage:`The token is invalid or expired`,
          });
        } else{
          req.token = results;
          next();
        }
        });
  }catch(err){
    res.status(500).json({
      success:false,
      massage:`Server Error`,
      err:err.massage,
    })
  }
}

module.exports = authentication;
