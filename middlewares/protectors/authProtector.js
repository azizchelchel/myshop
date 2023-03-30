import jwt from 'jsonwebtoken';

export const jwtProtector = (req,res,next) => { 
    // controll headers
    const authHeader = req.headers.authorization || req.headers.Authorization
    if(!authHeader?.startsWith('Bearer ')) return res.sendStatus(401); //unauthorized
    // get the token from req headers
    const token = authHeader.split(' ')[1] || authHeader.split(' ')[1];
    // decode the token
    jwt.verify(
        token,
        process.env.jwtSecret,
        (error,decoded) => {
            if(error) return res.sendStatus(403); //invalid token
            req.userId = decoded.userInfo.userId;
            req.permissions = decoded.userInfo.permissions;
            next();
        }
    );  
}