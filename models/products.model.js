const mongoose=require('mongoose');

mongoose.set('strictQuery', true);
 
db_url='mongodb+srv://aziz:123@myshop-cluster.gzypivq.mongodb.net/myshop?retryWrites=true&w=majority';


//    mongodb+srv://aziz:123@myshop-cluster.gzypivq.mongodb.net/myshop?retryWrites=true&w=majority


const productSchema=mongoose.Schema({

    name:String,
    image:String,
    price:Number,
    description:String,
    categorie:String
});


const ProductModel=mongoose.model('product', productSchema);


exports.getAllProducts=()=>{

    // connect to db

    // mongoose.connect(db_url)

    // .then(() => {

    //    return ProductModel.find({})   

    // })

    // .then(products=>{

    //         mongoose.disconnect();

    //     })        
    
    // create a customise promise
    
    // ************** but this mthod has problem wich is how to send results and then disconnect*****

    return new Promise((resolve,reject) => {

         // connect to db
      
    mongoose.connect(db_url)

    .then(() => {


        
        return ProductModel.find({})

        
       
    })

    .then(products=>{

            mongoose.disconnect();

           

            resolve(products);

        })

    .catch((err) => reject(err ))  
        
    })


}



