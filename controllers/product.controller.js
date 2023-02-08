
// import  {findProductById,findFirstProduct, createProductInDb, deleteFromDb} from '../models/product.model.js';
import  {createProductInDb, getAllProductsFromDb, findProductInDb, deleteFromDb } from '../models/product.model.js';

// create new product
const createProduct=(req,res,next)=>{
    // get the data
    const data=req.body;
    // get product from db 
    createProductInDb(data)
    .then(
        product=>{
            res.status(200).json(
                {
                    message:'succes',
                    data:product
                }
            )
        }
    )
    .catch(
        (error) => {
            console.log('error', error);
            res.status(500).json(
                {
                    message:'failed',
                    error:error
                }
            )
        }
    )
}


// get product by id
const getProductById=(req,res,next)=>{
    // get the product id from params
    const productId=req.params.id;
    console.log(productId);
    // get product from db 
    findProductInDb(productId)
    .then(
        product=>{
            res.status(200).json(
                {
                    message:'succes',
                    data:product
                }
            )
        }
    )
    .catch(
        (error) => {
            console.log('error', error);
            res.status(500).json(
                {
                    message:'failed',
                    error:error
                }
            )
        }
    )
}

// get first product in db
const getAllProducts =(req,res,next)=>{
    // get products from db 
    getAllProductsFromDb()
    .then(
        products=>{
            res.status(200).json(
                {
                    message:'success',
                    data:products
                }
            )
        }
    )
    .catch(
        (error) => {
            console.log('error', error);
            res.status(500).json(
                {
                    message:'failed',
                    error:error
                }
                )
        }
    )

}

// delete product
const deleteProduct =(req,res,next)=>{
    // get the product id from params
    const productId=req.params.id;
    // delete product from db 
    deleteFromDb(productId)
    .then(
        product=>{
            res.status(200).json(
                {
                    message:'success',
                    data:product
                }
            )
        }
    )
    .catch(
        (error) => {
            console.log('error', error);
            res.status(500).json(
                {
                    message:'failed',
                    error:error
                }
            )
        }
    )

}


export {getProductById,getAllProducts, deleteProduct, createProduct};