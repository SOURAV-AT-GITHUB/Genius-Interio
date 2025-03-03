require("dotenv").config()
const JWT_SECRET = process.env.JWT_SECRET
const jwt = require("jsonwebtoken")

module.exports = function verifyToken (req,res,next){
    const token = req.headers.authorization?.split(" ")[1] || null
    if(!token) return res.status(401).json({message:"Please login first"})
        jwt.verify(token,JWT_SECRET,(err,decoded)=>{
            if (err) return res.status(401).json({message:"Please Login again"})
            next()
        })
}
