const student = require("../models/student");
const admin=require("../models/admin")
const bcrypt = require('bcrypt');
const jwt=require('jsonwebtoken')
const addStudentController = async(req,res) => {
    try {
        const existingUser = await student.findOne({ email: req.body.email });
        if (existingUser) {
            return res.send({
                success: false,
                message: "User already exists ",
            })
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        req.body.password = hashedPassword
        
        const user = new student(req.body);
        await user.save();
        return res.send({
            success: true,
            message: "User registration successfull !",
            user
        })
    } catch (error) {
        console.log(error)
        return res.send({
            success: false,
            message: "error in register controller",
            error
        })
    }
}

const getStudentController = async(req,res) => {
    try {
        const user = await student.findOne({ _id: req.body.userId });
        return res.send({
            success: true,
            message: "Login SuccessFully !",
            user
        })
    } catch (error) {
        console.log(error)
        return res.send({
            success: false,
            message: "error in current-User",
            error
        })
    }
}

const adminregisterController = async (req, res) => {
    try {
        const existingUser = await admin.findOne({ email:req.body.email });
        if (existingUser) {
            return res.send({
                success: false,
                message: "User already exists ",
            })
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        req.body.password = hashedPassword

        const user = new admin(req.body);
        await user.save();
        return res.send({
            success: true,
            message: "Admin registration successfully !",
            user
        })

    } catch (error) {
        console.log(error)
        return res.send({
            success: false,
            message: "error in admin register",
            error
        })
    }
    
}
const adminloginController = () => {
    
}
module.exports = {addStudentController,getStudentController,adminregisterController,adminloginController};