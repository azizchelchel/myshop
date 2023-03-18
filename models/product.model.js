import Prisma from '@prisma/client';
const prisma = new Prisma.PrismaClient();

// create new product in DB
const createProductInDb = async (data) => {
    return (
        // create product
        await prisma.products.create(
            {
                data: {
                    name: data.name,
                    image: data.image,
                    price: data.price,
                    description: data.description,
                    category: data.category
                }
            }
        )
        .then(
            async product => {
                console.log(product)
                await prisma.$disconnect();
                return product ;
            }
        )
        .catch(
            async (error) => {
                console.log(error);
                await prisma.$disconnect();
                throw new Error(error );
            }
        )
    )
};

// find product by id in db

const findProductInDb = (id) => {
    return new Promise(
        async(resolve,reject) => {
            // find product
            await prisma.products.findUnique(
                {
                    where: {
                        product_id: parseInt(id),
                    }
                }
            )
            .then(
                async (product) => {
                    await prisma.$disconnect();
                    resolve(product);
                }
            )
            .catch(
                async (error) => {
                    console.log(error);
                    await prisma.$disconnect();
                    reject(error);
                }
            )  
        }
    )
};

// find the first product in db
const getAllProductsFromDb = () => {
    return new Promise(
        async (resolve,reject) => {
            // return all products
            await prisma.products.findMany(
                {
                    where: {isDeleted: false}
                }
            )
            .then(
                products => {
                    prisma.$disconnect();
                    resolve(products);
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

// delete product

const deleteProductFromDb = (id) => {
    return new Promise(
        async (resolve,reject) => {
            // soft delete product     
            await prisma.products.update(
                {
                    where: {
                        product_id: parseInt(id)
                    },
                    data: {
                        isDeleted: true
                    }
                
                }
            )
            .then(
                product => {
                    prisma.$disconnect();
                    resolve(product);
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

export const updateProductInDb = (data, id) => {
    return new Promise (
        async (resolve, reject) => {
            await prisma.products.update(
                {
                    where: {
                        product_id: parseInt(id)
                    },
                    data: {
                        name: data.name,
                        image: data.image,
                        price: data.price,
                        description: data.description,
                        category: data.category
                    }
                }
            )
            .then(
                async (updatedDrug) => {
                    await prisma.$disconnect();
                    resolve(updatedDrug);
                }
            )
            .catch(
                async (error) => {
                    console.log(error);
                    await prisma.$disconnect();
                    reject('system error update failed');
                }
            )
        }
    )
}

export  {findProductInDb, getAllProductsFromDb, deleteProductFromDb, createProductInDb};