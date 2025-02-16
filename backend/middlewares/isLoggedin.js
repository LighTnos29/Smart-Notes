const jwt = require('jsonwebtoken')
const userModel = require("../models/userModel")

module.exports = async function (req,res,next) {
    if(!req.cookies.token){
        return res.status(401).json({messsage : "Session expired , please login again." })
    }
    try {
        let decode = jwt.verify(req.cookies.token,process.env.JWT_KEY)
        let user = await userModel.findOne({email: decode.email})
        req.user = user
        next()
    } catch (error) {
        res.status(401).status({messsage:"Error occured during login."})
    }
    
}