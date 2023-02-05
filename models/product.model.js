import 'dotenv/config' ;
import {productModel} from './products.model.js'

// find product by id in db

const findProductById=(id)=>{

    return new Promise((resolve,reject) => {

        // connect to db
      
        connect(process.env.db_url.toString())

        .then(() => {
        
        return productModel.findById({_id:id})
       
        })

        .then(product=>{


            disconnect();

            resolve(product);

        })

        .catch(
            (err) => reject(err )
            )  
        
    })

   

}



// find the first product in db

const findFirstProduct=(_id)=>{

    return new Promise((resolve,reject) => {

        // connect to db
      
        connect(process.env.db_url.toString())

        .then(
            
            () => {
        
                return productModel.findOne({});
       
            }
        )
        .then(product=>{


            disconnect();

            resolve(product);

        })

        .catch((err) => reject(err ))  
        
    })

   

}


export  {findProductById,findFirstProduct};