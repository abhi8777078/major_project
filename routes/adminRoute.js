const express = require('express');
const { addStudentController, getStudentController, adminregisterController, adminloginController } = require('../controllers/AdminController');
const middleware = require('../middleware/authMiddleware');
const router = express.Router()

// Add Student
router.post('/addStudent', addStudentController)
// get student
router.get('/getStudent', middleware, getStudentController)
// REGISTER ADMIN 
router.post('/adminregister',adminregisterController)
// LOGIN ADMIN 
router.post('/adminlogin',adminloginController)

module.exports=router