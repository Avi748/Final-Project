import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export const verifytoken = (req, res, next) => {
    const accesstoken = req.cookies.token || req.headers["x-access-token"]; // token is the name we assign in the controller res.cookie
    // console.log("accesstoken", accesstoken);
    if(!accesstoken) return res.status(401).json({msg:"unauthorized"})

    jwt.verify(accesstoken, process.env.ACCESS_TOKEN_SECRET, (error, decode) => {
        if(error) return res.status(403).json({error:error.message, msg:"forbidden"});
        // console.log(decode);
        next();
    });
};