import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

// Charger les variables d'environnement du fichier .env
dotenv.config();

// Créer la connexion à la base de données
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: Number(process.env.DB_PORT),
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

export default pool;
