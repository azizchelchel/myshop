import {addSaleInDb,
        getSalesByUserIdFromDb,
        getSalesFromDb,
        getSalesByDateFromDb
    }  from '../models/sales.model.js';


export const addSale = async (req, res, next) => {
    const data = req.body;
    try {
        const sale = await addSaleInDb(data);
        res.status(200).json(
            {
                succes: true,
                message: 'sale creation success',
                sale: sale
            }
        );
    } 
    catch (error) {
        console.log('error', error);
        res.status(500).json(
            {
                success: false,
                message: error.message,
            }
        );
    }
}


export const getSales = async (req, res, next) => {
    await getSalesFromDb()
    .then(
        async sales => {
            res.status(200).json(
                {
                    succes: true,
                    message: 'sales retreived successfully',
                    sales: sales
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
                    message: error.message,
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
            res.status(200).json(
                {
                    succes: true,
                    message: 'sales retreived successfully',
                    sales: sales
                }
            )
        }
    )
    .catch(
        (error) => {
            console.log('error', error);
            res.status(500).json(
                {
                    success: false,
                    message: error.message,
                }
            );
        }
    )
}


export const getSalesByDate = async (req, res, next) => {
    const purchaseDate = req.body.purchaseDate;
    await getSalesByDateFromDb(purchaseDate)
    .then(
        sales => {
            res.status(200).json(
                {
                    succes: true,
                    message: 'sales retreived successfully',
                    sales: sales
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
                    message: error.message,
                }
            );
        }
    )
}

