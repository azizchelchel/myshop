import Prisma from '@prisma/client';
const prisma = new Prisma.PrismaClient();

export const addSaleInDb = async (data) => {
    const {id, items} = data;
    // calculate total cost in Item 
    items.map(drug => drug.totalItem = parseInt(drug.drugPrice) * parseInt(drug.quantity)
    );
    // calculate total cost of Sale
    let totalSale = 0;
    items.forEach(item => totalSale = totalSale + item.totalItem);
    try {
        const sale = await prisma.sales.create(
            {
                data: {
                    userId: id,
                    items: {
                        create: items
                    },
                    totalSale: totalSale
                },
                include: {
                    items: true,
                } 
            }
        );
        await prisma.$disconnect();
        return sale;
    } 
    catch (error) {
        console.log(error);
        await prisma.$disconnect();
        throw error;
    }  
};

export const getSalesFromDb = async () => {
    try {
        const sales = await prisma.sales.findMany()
        await prisma.$disconnect();
        return sales;
    } catch (error) {
        await prisma.$disconnect();
        throw error;
    }
};


export const getSalesByUserIdFromDb = async (userId) => {
    try {
        const sales = await prisma.sales.findMany(
            {
                where: {
                    userId: parseInt(userId)
                }
            }
        );
        await prisma.$disconnect();
        return sales;
    } 
    catch (error) {
        console.log(error);
        await prisma.$disconnect();
        throw error;
    }
};


export const getSalesByDateFromDb = async (date) => {
    const purchaseDate= new Date(date);
    const pivot = new Date(date);  //date pivot for calculation
    const dayAfter = new Date(pivot.setDate(purchaseDate.getDate() + 1));//purchase date plus one day 
    try {
        const sales = await prisma.sales.findMany(
            {
                where: {
                    purchaseDate: {
                        gte: purchaseDate,
                        lt: dayAfter 
                    }
                }
            }
        );
        await prisma.$disconnect();
        return sales;
    } catch (error) {
        console.log(error);
        await prisma.$disconnect();
        throw error;
    }     
};
