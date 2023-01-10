const getCart=(req,res,next)=>{

    res.render('cartPage',
    {
        message:'hello from cart',
        isUser:req.session.userId
    })
}

export {getCart}