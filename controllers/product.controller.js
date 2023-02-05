
import  {findProductById,findFirstProduct} from '../models/product.model.js';

const getProductById=(req,res,next)=>{

    // get the product id from params

    const productId=req.params.id;

    console.log(productId);

    // get product from db 
    
    findProductById(productId).then(
        
        product=>{

        res.render('productDetails',
        {
            
            product:product
        }
        )
    })
    .catch((err) => {

    console.log('error', err)
        
})

}

const getFirstProduct =(req,res,next)=>{

    // get the product id from params

    const productId=req.params.id;


    // get product from db 
    
    findFirstProduct(productId).then(
        
        product=>{

        res.render('productDetails',
        {
            
            product:product,
            userId:req.session.userId
        }
        )
    })
    .catch((err) => {

    console.log('error', err)
        
})

}

export {getProductById,getFirstProduct};