import express from "express"
import userController from "../controllers/user.controller";

const router=express.Router();


router.post('/signup',userController.createUser);

router.post('/login', userController.loginUser);

router.get('/', userController.getUsers);

router.get('/:userId', userController.getUserById);


export default router;

