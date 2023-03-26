import Prisma from '@prisma/client';
const prisma = new Prisma.PrismaClient();

// create new product in DB
export const createDrugInDb = async (data) => {
    // create product
    try {
        const drug = await prisma.drug.create(
            {
                data: {
                    forme: data.forme,
                    libelle: data.libelle,
                    libelle_court: data.libelle_court,
                    price: data.price                     
                }
            }
        );
        if(drug){
            console.log(drug)
            await prisma.$disconnect();
            return drug;
        }
    } 
    catch (error) {
        console.log(error);
        await prisma.$disconnect();
        throw new Error("internal system error, create error");
    }
};

// update drug
export const updateDrugInDb = async (data) => {
    try {
        const updatedDrug = await prisma.drug.update(
            {
                where: {
                    id: parseInt(data.id)
                },
                data: {
                    forme: data.forme,
                    libelle: data.libelle,
                    libelle_court: data.libelle_court,
                    price: data.price
                }
            }
        );
        await prisma.$disconnect();
        return updatedDrug; 
    } 
    catch (error) {
        console.log(error);
        await prisma.$disconnect();
        throw error;
    }
}

// find all the drugs
export const getAllDrugsFromDb = async () => {
    // return all drugs
    return await prisma.drug.findMany(
        {
            where: {
                isDeleted: false
            }
        }
    )
    .then(
        async drugs => {
            await prisma.$disconnect();
            return drugs;
        }
    )
    .catch(
        async (error) => {
            console.log(error);
            await prisma.$disconnect();
            throw error;
        }
    )  
};


// find drug by id in db
export const findDrugInDb = async (id) => {
    // find drug
    return await prisma.drug.findMany(
        {
            where:{
                id,
                isDeleted: false
            }
        }
    )
    .then(
        async (drug) => {
            await prisma.$disconnect();
            return drug;
        }
    )
    .catch(
        async (error) => {
            console.log(error);
            await prisma.$disconnect();
            throw error;
        }
    )  
};

// delete drug from db
export const deleteDrugFromDb = async (id) => {
    // soft delete drug     
    return await prisma.drug.update(
        {
            where: {
                id: id,
            },
            data: {
                isDeleted: true
            }
        
        }
    )
    .then(
        async drug => {
            await prisma.$disconnect();
            return drug;
        }
    )
    .catch(
        async (error) => {
            console.log(error);
            await prisma.$disconnect();
            throw error;
        }
    )  
};

