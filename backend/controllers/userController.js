const userModel = require('../models/userModel')
const bcrypt = require('bcrypt')
const generateToken = require('../utils/generateToken')

module.exports.registerUser = async function (req, res) {
    try {
        const { username, email, password } = req.body
        let user = await userModel.findOne({ email })
        if (user) {
            return res.status(400).json({ message: "User already exists." })
        }
        bcrypt.genSalt(10, function (err, salt) {
            bcrypt.hash(password, salt, async function (err, hash) {
                if (err) {
                    return res.status(401).json({ message: "Cannot create user" })
                } else {
                    let user = await userModel.create({
                        username,
                        email,
                        password: hash
                    })
                    let token = generateToken(user)
                    res.cookie("Token", token)
                    res.status(200).json({ message: "User Created Successfully", token });
                }
            });
        });
    } catch (error) {
        res.status(401).json({ message: "Not able to create user , Please try again later." })
    }
}

module.exports.loginUser = async function (req, res) {
    try {
        let { email, password } = req.body
        let user = await userModel.findOne({ email })
        if (!user) {
            return res.status(400).json({ message: "User not found." })
        }
        await bcrypt.compare(password, user.password, function (err, result) {
            if (result) {
                let token = generateToken(user)
                res.cookie("token", token)
                res.status(200).json({ message: "Login successful", token })
            } else {
                res.status(401).json({ message: "Email or password incorrect.",err })
            }
        });

    } catch (error) {
        res.status(400).json({ message: "Error please try login again." })
    }
}

module.exports.logoutUser = async function (req, res) {
    res.clearCookie("token",)
    res.status(200).json({ message: "Logout successful." })
}