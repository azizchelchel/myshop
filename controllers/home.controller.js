import  getProducts  from '../models/products.model.js';

const getHome=(req,res,next)=>{

    // get catgory

    const category=req.query.category;

    getProducts(category).then(
        
        products=>{
        
        res.render('index',
            {
                products:products
            }
        )
        })
        
        .catch((err) => {
        
            console.log('error', err)

        }
    )

}

export default getHome;