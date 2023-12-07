const student = require("../models/student");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const studentloginController = async (req, res) => {
    try {
        const user = await student.findOne({ email: req.body.email });
        if (!user) {
            return res.send({
                success: false,
                message: "User not exists ",
            })
        }
        const comparepassword = await bcrypt.compare(req.body.password, user.password);
        if (!comparepassword) {
            return res.send({
                success: false,
                message: "Invalide Password !",
            })
        }
        const token = jwt.sign({ userId:user._id },process.env.JWT_SECRET, { expiresIn: "1d" });
        return res.send({
            success: true,
            message: "Login SuccessFully !",
            token,
            user
        })
    } catch (error) {
        console.log('error');
        return res.send({
            success: false,
            message: "error !",
            error
        })
    }
}
module.exports = { studentloginController };