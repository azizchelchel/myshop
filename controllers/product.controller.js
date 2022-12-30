
import  findProduct from '../models/product.model.js';

const getProduct=(req,res,next)=>{

    // get the product id

    const productId=req.params.id;

    console.log(productId);

    // get product from db 
    
    findProduct(productId).then(
        
        product=>{

        res.render('product',
        {
            
            product:product
        }
        )
    })
    .catch((err) => {

    console.log('error', err)
        
})

}

export default getProduct;