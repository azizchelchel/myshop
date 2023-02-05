import {getProducts} from '../models/products.model.js';

const getHome=(req,res,next)=>{

    // get catgory
    const category=req.query.category;
    getProducts(category)
    .then(
        products=>{
            res.status(200).json({
                message:"successful",
                data:products,           
            }
        )
        }
    ) 
    .catch( error => {
            console.log('error', error)
            res.status(500).json({
                message:"error occured",
                error:error
            })
        }
    )

}

export default getHome;