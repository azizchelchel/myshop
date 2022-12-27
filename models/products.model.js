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


const ProductModel=model('product', productSchema);

const getAllProducts=()=>{

    return new Promise((resolve,reject) => {

        // connect to db
      
        connect(process.env.db_url.toString())

        .then(() => {
        
        return ProductModel.find({})
       
        })

        .then(products=>{

            disconnect();

            resolve(products);

        })

        .catch((err) => reject(err ))  
        
    })

   

}

export default getAllProducts;