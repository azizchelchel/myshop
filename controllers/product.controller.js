
import {
    createProductInDb,
    getAllProductsFromDb,
    findProductInDb,
    deleteFromDb
} from '../models/product.model.js';

// create new product
const createProduct = async (req,res,next) => {
    // get the data from request
    const data = req.body;
    // create product 
    await createProductInDb(data)
    .then(
        product => {
            res.status(200).json(
                {
                    message: 'succes',
                    data: product
                }
            );
        }
    )
    .catch(
        (error) => {
            console.log('error', error);
            res.status(500).json(
                {
                    message: 'failed',
                    error: error
                }
            );
        }
    )
};

// get product by id
const getProductById = async (req,res,next) => {
    // get the product id from params
    const productId = req.params.id;
    // get product from db 
    await findProductInDb(productId)
    .then(
        product => {
            res.status(200).json(
                {
                    message: 'succes',
                    data: product
                }
            );
        }
    )
    .catch(
        (error) => {
            console.log('error', error);
            res.status(500).json(
                {
                    message: 'failed',
                    error: error
                }
            );
        }
    )
};

// get all products in db
const getAllProducts = async (req,res,next) => {
    // get products from db 
    await getAllProductsFromDb()
    .then(
        products=>{
            res.status(200).json(
                {
                    message: 'success',
                    data: products
                }
            );
        }
    )
    .catch(
        (error) => {
            console.log('error', error);
            res.status(500).json(
                {
                    message: 'failed',
                    error: error
                }
            );
        }
    )

};

// delete product
const deleteProduct = async (req,res,next) => {
    // get the product id from params
    const productId = req.params.id;
    // delete product from db 
    await deleteFromDb(productId)
    .then(
        product => {
            res.status(200).json(
                {
                    message: 'success',
                    data: product
                }
            );
        }
    )
    .catch(
        (error) => {
            console.log('error', error);
            res.status(500).json(
                {
                    message: 'failed',
                    error: error
                }
            );
        }
    )

};

export {getProductById,getAllProducts, deleteProduct, createProduct};