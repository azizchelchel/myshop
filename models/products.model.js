import mongoose, { model, Schema } from 'mongoose';
import 'dotenv/config' ;
const productSchema=Schema({

    name:String,
    image:String,
    price:Number,
    description:String,
    categorie:String
});


const productModel=model('product', productSchema);

const getProducts=(category)=>{

    return new Promise((resolve,reject) => {

        // connect to db
      
        connect(process.env.db_url.toString())

        .then(() => {
            if (category==='all' || category=== undefined) return productModel.find();
         
            return productModel.find({categorie:category})
       
        })

        .then(products=>{

            disconnect();

            resolve(products);

        })

        .catch((err) => reject(err ))  
        
    })

   

}

export {getProducts,productModel};