import {getProducts} from '../models/products.model.js';

const getHome=(req,res,next)=>{

    // get catgory

    const category=req.query.category;

    getProducts(category).then(
        
        products=>{
            console.log(req.session.userId),
        
        res.render('index',
            {
                
                products:products,
                isUser:req.session.userId
            }
        )
        })
        
        .catch((err) => {
        
            console.log('error', err)

        }
    )

}

export default getHome;