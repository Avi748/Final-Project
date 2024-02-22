import {_getDominosMenu, _getMcdonaldsMenu, _getGabayMenu, _register, _login, _all} from '../models/restaurant.model.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export const getDominosMenu = (req, res) => {
    _getDominosMenu()
    .then(data => {
        res.json(data)
    })
    .catch((err) => {
        res.status(404).json({message: 'Menu not found'});
    })
};

export const getMcdonaldsMenu = (req, res) => {
    _getMcdonaldsMenu()
    .then(data => {
        res.json(data)
    })
    .catch((err) => {
        res.status(404).json({message: 'Menu not found'});
    })
};

export const getGabayMenu = (req, res) => {
    _getGabayMenu()
    .then(data => {
        res.json(data)
    })
    .catch((err) => {
        res.status(404).json({message: 'Menu not found'});
    })
};

export const login = async(req, res) => {
    try {
        const {email, password} = req.body;
        const row = await _login(email.toLowerCase());

        if(row.length === 0)
            return res.status(404).json({msg:"email not found"});

        const match = bcrypt.compareSync(password +"", row[0].password); //row[0] because we returning array with one object in index 0 because the email is unique in db
        if(!match) return res.status(404).json({msg:"wrong password"});

        const userid = row[0].userid;
        const useremail = row[0].email;
        const secret = process.env.ACCESS_TOKEN_SECRET;
        const accesstoken = jwt.sign({userid, useremail}, secret, {expiresIn:'60s'});

        res.cookie('token', accesstoken, {
            maxAge: 60 * 1000,
            httpOnly: true
        });

        res.json({ token:accesstoken })

    } catch (error) {
        console.log('login error => ', error);
        res.status(404).json({msg:'Something went wrong'})
    }
}

export const register = async(req, res) => {
    const {email, password} = req.body;
    const loweremail = email.toLowerCase();

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password +"", salt); //+"" convert the password to String

    try {
        const row = await _register(loweremail, hash)
        res.json(row)
    } catch (error) {
        console.log('register error => ', error);
        res.status(404).json({msg:'email exist'})
    }
}

export const all = async(req, res) => {
    try {
        const rows = await _all()
        res.json(rows)
    } catch (error) {
        console.log('all error => ', error);
        res.status(404).json({msg:'Users not found'})
    }
}