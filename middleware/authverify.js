const jwt = require("jsonwebtoken");

const jwtKey = "abhis"

const authVerify = (req,res,next)=>{
    const token = req.headers.authorization;

    try{
        const decodedToken=jwt.verify(token,jwtKey);
        req.user={userId:decodedToken.id}
        return next();  
     }
     catch(err){
        console.error(`error from server ${JSON.stringify(err)}`)
     }
}

module.exports = authVerify;