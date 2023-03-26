
import {
    createProductInDb,
    getAllProductsFromDb,
    findProductInDb,
    deleteProductFromDb,
    updateProductInDb
} from '../models/product.model.js';

// create new product
const createProduct = async (req,res,next) => {
    // get the data from request
    const data = req.body;
    try {
        const product = await createProductInDb(data);
        res.status(200).json(
            {
                succes: true,
                message: 'pruduct creation success',
                productId: product.product_id
            }
        );

    } catch (error) {
        console.log('error', error);
        res.status(500).json(
            {
                success: false,
                message: 'system error',
                error: error.message
            }
        );
    }
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
                    succes: true,
                    message: 'get product success',
                    product: product
                }
            );
        }
    )
    .catch(
        (error) => {
            console.log('error', error);
            res.status(500).json(
                {
                    success: false,
                    message: 'system error',
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
                    success: true,
                    message: 'get products success',
                    products: products
                }
            );
        }
    )
    .catch(
        (error) => {
            console.log('error', error);
            res.status(500).json(
                {
                    success: false,
                    message: 'system error',
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
    await deleteProductFromDb(productId)
    .then(
        product => {
            res.status(200).json(
                {
                    success: true,
                    message: 'delete product success',
                    product: product
                }
            );
        }
    )
    .catch(
        (error) => {
            console.log('error', error);
            res.status(500).json(
                {
                    success: false,
                    message: 'system error',
                    error: error
                }
            );
        }
    )

};

// update product
const updateProduct = async (req,res,next) => {
    // get the product id from params
    const productId = req.params.id;
    // data to update
    const data = req.body 
    await updateProductInDb(data,productId)
    .then(
        product => {
            res.status(200).json(
                {
                    success: true,
                    message: 'update product success',
                    product: product
                }
            );
        }
    )
    .catch(
        (error) => {
            console.log('error', error);
            res.status(500).json(
                {
                    success: false,
                    message: 'system error',
                    error: error
                }
            );
        }
    )

};

export {
    getProductById,
    getAllProducts,
    deleteProduct,
    createProduct,
    updateProduct
};