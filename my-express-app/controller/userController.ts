import {Request, Response} from 'express';
import * as userService from "../service/userService"
import {JwtPayload, UserModel} from "../model/userModel";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const secretKey = 'REZDFSGFSQGDSQGQSFSQDFQSGSQGQD';

const getAllUser = async (req: Request, res: Response) => {
    try {
        const response = userService.showUser();
        console.log(response)
        return response
    } catch (error) {
        console.error('Error recovering users :', error);
        res.status(500).json({ message: 'Error server' });
    }
};

const createUser = async (req:Request,res:Response) => {
    try {
        let user: UserModel = req.body;

        user = fillUserModel(user);
        user.password = await hashPassword(String(user.password))

        const rst:UserModel = await userService.createUser(user);
        delete rst.password;

        const jwtPayload: JwtPayload = {
            id: rst.id
        }

        console.log(jwtPayload);
        rst.jwtToken = generateToken(jwtPayload)
        console.log("------");
        console.log(rst);

        res.status(201).send(rst);
    }catch (err) {
        console.error('Error in createUserController:', err);
        res.status(500).send('Error creating user');
    }
}

const modifyUser = async (req:Request,res:Response) => {
    try {
        const userId = parseInt(req.params.id);
        const updates: Partial<UserModel> = req.body;

        await userService.updateUser(userId, updates);

        res.status(200).send(`User with ID ${userId} updated successfully`);
    } catch (err) {
        console.error('Error in updateUserController:', err);
        res.status(500).send('Error updating user');
    }
}

const deleteUser = async (req:Request,res:Response) => {
    try {
        const userId = parseInt(req.params.id);

        await userService.deleteUser(userId);

        res.status(200).send(`User with ID ${userId} deleted successfully`);
    }catch (err: any) {
        console.error('Error in deleteUserController:', err);
        res.status(500).send('Error deleting user : ' + err);
    }
}

// Fonction pour hasher un mot de passe
export const hashPassword = async (password: string): Promise<string> => {
    const saltRounds = 10;

    return await bcrypt.hash(password, saltRounds);
};

export const comparePassword = async (password: string, hashedPassword: string): Promise<boolean> => {
    return await bcrypt.compare(password, hashedPassword);
};

const fillUserModel = (user:UserModel) : UserModel => {
    if (user.token == undefined) user.token = 0
    // if (user.status == undefined) user.status = 0
    if (user.xp == undefined) user.xp = 0

    return user;
}

export const generateToken = (payload: JwtPayload): string => {
    return jwt.sign(payload, secretKey, {
        expiresIn: '1h',
    });
};

export {getAllUser, createUser, modifyUser, deleteUser}