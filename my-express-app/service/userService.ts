import pool from "../db/db";
import {UserModel} from "../model/userModel";
import mysql from "mysql2/promise";


const showUser = async () => {
    try {
        const [rows] = await pool.query('SELECT * FROM users');
        return rows;
    } catch (error) {
        console.error('Erreur lors de la récupération des utilisateurs :', error);
        throw error;
    }
}

const showUserById = async (id:number) : Promise<UserModel> => {
    try {
        const [rows] = await pool.query('SELECT * FROM users Where id = ?',[id]);

        return (rows as UserModel[])[0]; // convert a query type into a user
    } catch (error) {
        console.error('Erreur lors de la récupération des utilisateurs :', error);
        throw error;
    }
}

const createUser = async (user:Partial<UserModel>) => {
    try {
        const [query] = await pool.query(
            'INSERT INTO users (email, password, first_name, last_name, age, token, xp) VALUES (?, ?, ?, ?, ?, ?, ?)',
            [user.email, user.password, user.first_name, user.last_name, user.age, user.token, user.xp]
        );

        const userId = (query as mysql.ResultSetHeader).insertId;
        const userCreated: UserModel | null =  await showUserById(userId)

        return userCreated
    } catch (error) {
        console.error('Error creating user:', error);
        throw new Error('Error creating user');
    }
}

const updateUser = async (id: number, updates: Partial<UserModel>): Promise<void> => {
    const [userResult] = await pool.query('SELECT * FROM users WHERE id = ?', [id]);

    if ((userResult as any[]).length === 0) {
        throw new Error('User not found');
    }

    const existingUser = (userResult as any[])[0];

    const updatedUser: UserModel = {
        ...existingUser,
        ...updates
    };

    await pool.query(
        'UPDATE users SET email = ?, password = ?, first_name = ?, last_name = ?, age = ?, token = ?, xp = ? WHERE id = ?',
        [updatedUser.email, updatedUser.password, updatedUser.first_name, updatedUser.last_name, updatedUser.age, updatedUser.token, updatedUser.xp, 1]
    );
};

const deleteUser = async (id: number): Promise<void> => {
    const [userResult] = await pool.query('SELECT * FROM users WHERE id = ?', [id]);

    if ((userResult as any[]).length === 0) {
        throw new Error('User not found');
    }

    console.log("id : ", id)

    await pool.query('DELETE FROM users WHERE id = ?;', [id])
};

export {showUser,createUser, updateUser, deleteUser};

