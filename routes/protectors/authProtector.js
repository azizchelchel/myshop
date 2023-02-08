import jwt from 'jsonwebtoken';
const jwtProtector=(req,res,next) => { 
    try {
        console.log("aw rani hnaa")
        // get the token from req headers
        const token=req.headers.authorization.split(' ')[1];
        // decode the token
        const decodedToken=jwt.verify(token, process.env.jwtSecret);  
        //   extract the userId from the decoded token
        const userId = decodedToken.userId;
        req.auth={
            userId:userId
        }
        next()
    } catch (error) {
        res.status(401).json({error});
    }
 }

 export{jwtProtector}