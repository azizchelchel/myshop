import {addSaleInDb,
        getSalesByUserIdFromDb,
        getSalesFromDb,
        getSalesByDateFromDb
    }  from '../models/sales.model.js';


export const addSale = async (req, res, next) => {
    // get the data from request(userId, drugId, quantity, purchaseDate)
    const data = req.body;
    console.log(data);
    // create product 
    await addSaleInDb(data)
    .then(
        sale => {
            res.status(200).json(
                {
                    succes: true,
                    message: 'sale creation success',
                    sale: sale
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
}


export const getSales = async (req, res, next) => {
    await getSalesFromDb()
    .then(
        async sales => {
            if(Object.keys(sales).length > 0){
                res.status(200).json(
                    {
                        succes: true,
                        message: 'sales retreived successfully',
                        sales: sales
                    }
                );
            }
            else
            {
                res.status(200).json(
                    {
                        succes: true,
                        message: 'no sales in db',
                        sales: sales
                    }
                );
            }
            
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
}

export const getSalesByUserId = async (req, res, next) => {
    const userId = req.params.id;
    await getSalesByUserIdFromDb(userId)
    .then(
        sales => {
            if(Object.keys(sales).length > 0){ 
                res.status(200).json(
                    {
                        succes: true,
                        message: 'sales retreived successfully',
                        sales: sales
                    }
                )
            }
            else
            {
                res.status(200).json(
                    {
                        success: true,
                        message: 'there is no sale',
                        sales: sales
                    }
                );
            }
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
}


export const getSalesByDate = async (req, res, next) => {
    const purchaseDate = (req.body.purchaseDate).toString();
    console.log(purchaseDate);
    // create product 
    await getSalesByDateFromDb(purchaseDate)
    .then(
        sales => {
            if(sales){ 
                console.log(Object.keys(sales).length);
                res.status(200).json(
                    {
                        succes: true,
                        message: 'sales retreived successfully',
                        sales: sales
                    }
                );
            }
            else
            {
                res.status(200).json(
                    {
                        succes: true,
                        message: 'there is no sale',
                        
                    }
                );
            }
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
}

