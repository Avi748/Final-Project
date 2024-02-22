import express from 'express'
import {getDominosMenu, getMcdonaldsMenu, getGabayMenu, register, login, all} from '../controllers/restaurant.controller.js';
import { verifytoken } from '../middlewares/verifyToken.js';

export const app_router = express.Router();

app_router.get("/api/Dominos", getDominosMenu);

app_router.get("/api/Mcdonalds", getMcdonaldsMenu);

app_router.get("/api/Gabay", getGabayMenu);

app_router.post('/register', register);

app_router.post('/login', login);

app_router.get('/', verifytoken, all);

app_router.get('/verify', verifytoken, (req, res) => {
    res.sendStatus(200);
})