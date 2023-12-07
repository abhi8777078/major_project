const express = require('express');
const { studentloginController } = require('../controllers/StudentController');
const router = express.Router();

// STUDENT LOGIN
router.post('/login', studentloginController);



module.exports=router