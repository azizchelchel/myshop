const productsModel=require('../models/products.model');

exports.getHome=(req,res,next)=>{

    // get products from db 
    
    productsModel.getAllProducts().then(products=>{

       
        res.render('index',
        {
            products:products
        }
        )
    })
    .catch((err) => {

    console.log('error', err)
        
})


}
