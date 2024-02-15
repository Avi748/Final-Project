import knex from 'knex';
import dotenv from 'dotenv'
dotenv.config()

export const db = knex({
    client: 'pg',
    connection: {
        host: process.env.DB_HOST, //'127.0.0.1'
        port: process.env.DB_PORT,
        user: process.env.DB_USER, //'postgres'
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
    }
});