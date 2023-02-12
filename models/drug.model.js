import Prisma from '@prisma/client';
const prisma = new Prisma.PrismaClient();

// create new product in DB
const createDrugInDb = (data) => {
    return new Promise(
        async (resolve,reject) => {
            // create product
            await prisma.drug.create(
                {
                    data: {
                        forme: data.forme,
                        libelle: data.libelle,
                        libelle_court: data.libelle_court                        
                    }
                }
            )
            .then(
                async drug => {
                    console.log(drug)
                    await prisma.$disconnect();
                    resolve(drug);
                }
            )
            .catch(
                async (error) => {
                    console.log(error);
                    console.log("ddd");
                    await prisma.$disconnect();
                    reject(error );
                }
            )  
        }
    )
};

// update drug

const updateDrugInDb = (data) => {
    return new Promise (
        async (resolve, reject) => {
            await prisma.drug.update(
                {
                    where: {
                        drug_id: parseInt(data.drug_id)
                    },
                    data: {
                        forme: data.forme,
                        libelle: data.libelle,
                        libelle_court: data.libelle_court,
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

// find all the drugs
const getAllDrugsFromDb = () => {
    return new Promise(
        async (resolve,reject) => {
            // return all drugs
            await prisma.drug.findMany(
                {
                    where: {isDeleted: false}
                }
            )
            .then(
                drugs => {
                    prisma.$disconnect();
                    resolve(drugs);
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


// find drug by id in db

const findDrugInDb = (id) => {
    return new Promise(
        async(resolve,reject) => {
            // find drug
            await prisma.drug.findUnique(
                {
                    where: {
                        drug_id: id
                    }
                }
            )
            .then(
                async (drug) => {
                    console.log(drug)
                    await prisma.$disconnect();
                    resolve(drug);
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

// delete drug from db

const deleteDrugFromDb = (id) => {
    return new Promise(
        async (resolve,reject) => {
            // soft delete drug     
            await prisma.drug.update(
                {
                    where: {
                        drug_id: id
                    },
                    data: {
                        isDeleted: true
                    }
                
                }
            )
            .then(
                async drug => {
                    await prisma.$disconnect();
                    resolve(drug);
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

export  { 
    updateDrugInDb,
    createDrugInDb,
    getAllDrugsFromDb,
    deleteDrugFromDb,
    findDrugInDb
};