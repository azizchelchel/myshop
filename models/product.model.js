import { set, Schema, model, connect, disconnect } from 'mongoose';

import 'dotenv/config' ;

set('strictQuery', true);   


const productSchema=Schema({

    name:String,
    image:String,
    price:Number,
    description:String,
    categorie:String
});


// const productModel=model('product', productSchema);

const findProduct=(id)=>{

    return new Promise((resolve,reject) => {

        // connect to db
      
        connect(process.env.db_url.toString())

        .then(() => {
        
        return productModel.findOne({id:id})
       
        })

        .then(product=>{

            disconnect();

            resolve(product);

        })

        .catch((err) => reject(err ))  
        
    })

   

}

export default findProduct;