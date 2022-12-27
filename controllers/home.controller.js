import  getAllProducts  from '../models/products.model.js';

const getHome=(req,res,next)=>{

    // get products from db 
    
    getAllProducts().then(
        
        products=>{

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

export default getHome;