const express=require('express');

const router=express.Router();

const validateInput=require("../validators/inputValidator");

const authController=require('../controllers/auth.controller')

const {registerSchema ,loginSchema}=require("../validations/auth.validation"); 


const userAuth = require('../middlewares/user.auth.middleware');

router.post('/register',validateInput(registerSchema), authController.register);

router.post('/login',validateInput(loginSchema),authController.login);

router.post('/logout',authController.logout);

router.get('/me',userAuth,authController.me);

module.exports=router;