import express from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import {app_router} from './routes/restaurant.router.js'
import path from 'path'

dotenv.config();

const app = express();

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json());

app.listen(process.env.PORT || 3001, () => {
    console.log(`run on ${process.env.PORT || 3001}`);
})

app.use(app_router)

app.use(express.static(path.join(__dirname, "/client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

