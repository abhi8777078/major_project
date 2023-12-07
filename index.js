const express = require('express')
const cors=require('cors');
const morgan = require('morgan');
const app = express()
const PORT = 8080
const connectDB = require('./config/db');
connectDB();
const dotenv = require('dotenv');
dotenv.config();
// **********************************
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
// **********************************
const studentRoute=require('./routes/studentRoute');
const adminRoute=require('./routes/adminRoute');
// *********************************
// STUDENT 
app.use('/api/v1/student', studentRoute);
// ADMIN
app.use('/api/v1/admin',adminRoute)

app.listen(PORT, () => {
    console.log('Node is running ');
})