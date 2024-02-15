import express from 'express'
import {getDominosMenu, getMcdonaldsMenu, getGabayMenu} from '../controllers/restaurant.controller.js'

export const app_router = express.Router();

app_router.get("/api/Dominos", getDominosMenu)
app_router.get("/api/Mcdonalds", getMcdonaldsMenu)
app_router.get("/api/Gabay", getGabayMenu)