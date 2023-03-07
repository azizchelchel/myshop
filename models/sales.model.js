import Prisma from '@prisma/client';

const prisma = new Prisma.PrismaClient();


export const addSaleInDb = (data) => {
    const {userId, items} = data;
    // calculate totalItem 
    items.map(e => e.totalItem = parseInt(e.drugPrice) * parseInt(e.quantity)
    );
    // calculate totalSale
    let totalSale = 0;
    items.forEach(e => totalSale = totalSale + e.totalItem);

    return new Promise(
        async (resolve,reject) => {
            await prisma.sales.create(
                {
                    data: {
                        userId,
                        items: {
                            create: items
                        },
                        totalSale: totalSale
                    },
                    include: {
                        items: true,
                    }  
                }
            )
            .then(
                async sale => {
                    console.log(sale)
                    await prisma.$disconnect();
                    resolve(sale);
                }
            )
            .catch(
                async (error) => {
                    console.log(error);
                    await prisma.$disconnect();
                    reject(error );
                }
        
            )
        }
    )
};



export const getSalesFromDb = (userId) => {
    return new Promise(
        async (resolve,reject) => {
            // create sale
            await prisma.sales.findMany()
            .then(
                async sales => {
                    if(sales){
                        console.log(sales)
                        await prisma.$disconnect();
                        resolve(sales);
                    }
                    else
                    {
                        console.log("no salesin db")
                        await prisma.$disconnect();
                        resolve('no sales in db');
                    }
                    
                }
            )
            .catch(
                async (error) => {
                    console.log(error);
                    await prisma.$disconnect();
                    reject(error );
                }
            )  
        }
    )
};

export const getSalesByUserIdFromDb = (userId) => {
    return new Promise(
        async (resolve,reject) => {
            await prisma.sales.findMany(
                {
                    where: {
                        userId: parseInt(userId)
                    }
                }
            )
            .then(
                async sales => {
                    await prisma.$disconnect();
                    resolve(sales);
                }
            )
            .catch(
                async (error) => {
                    console.log(error);
                    await prisma.$disconnect();
                    reject(error );
                }
            )  
        }
    )
};


export const getSalesByDateFromDb = (purchaseDate) => {
    return new Promise(
        async (resolve,reject) => {
            const toDay = new Date(purchaseDate); //purchcacseDate without time part
            const dayAfter = new Date(toDay.getTime()); 
            dayAfter.setDate(toDay.getDate() + 1); //purchcacseDate plus one day
            await prisma.sales.findMany(
                {
                    where: {
                        purchaseDate: {
                            gte: toDay,
                            lt: dayAfter
                        }
                    }
                }
            )
            .then(
                async sales => {
                    await prisma.$disconnect();
                    resolve(sales);
                }
            )
            .catch(
                async (error) => {
                    console.log(error);
                    await prisma.$disconnect();
                    reject(error );
                }
            )  
        }
    )
};
