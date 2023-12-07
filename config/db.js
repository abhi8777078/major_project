const mongoose = require('mongoose');
const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://abhi8777078:abhi8777078@cluster0.fgqcetq.mongodb.net/')
        console.log('Connected to database');
    } catch (error) {
        console.log('error in db connection');
    }
}
module.exports=connectDB