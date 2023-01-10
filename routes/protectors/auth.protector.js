
// if user is authenticated allow him to access this route else don't

const isAuth=(req,res,next)=>{
    if(req.session.userId) next();
    else res.redirect('/auth/getLoginPage');
}

// if user is  non authenticated allow him to access this route else don't

const isNotAuth=(req,res,next)=>{
    if(req.session.userId) res.redirect('/auth/getLoginPage');
    else next();
}


export {isAuth, isNotAuth}