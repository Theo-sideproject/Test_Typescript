import express, {Request, Response, Router} from "express";
import {
    createUser,
    deleteUser,
    getAllUser,
    modifyUser
} from "../controller/userController";

const userRouter:Router = express.Router();

userRouter.get('/', getAllUser);

userRouter.get('/mail/:email',(req:Request,res:Response) => {
    console.log("email");
});

userRouter.get('/pseudo/:pseudo',(req:Request,res:Response) => {
    console.log("pseudo");
});

userRouter.post('/create', createUser );
userRouter.patch('/modify/:id',modifyUser);
userRouter.delete('/delete/:id',deleteUser);


export {userRouter};
