
import {
    updateDrugInDb,
    createDrugInDb,
    getAllDrugsFromDb,
    findDrugInDb,
    deleteDrugFromDb
} from '../models/drug.model.js';

// create new drug
const createDrug = async (req,res,next) => {
    // get the data from request
    const data = req.body;
    // create drug
    await createDrugInDb(data)
    .then(
        drug => {
            res.status(200).json(
                {
                    success: true,
                    message: 'drug created successfully',
                    drug: drug
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
                    message: 'drug update failed',
                    error: error
                }
            );
        }
    )
};

// update drug
const updateDrug = (req,res,next) => {
    // new data to update with
    const data = req.body;
    updateDrugInDb(data)
    .then(
       (drug) => {
            res.status(200).json(
                {
                    success: true,
                    message: 'drug updated successfully',
                    drug: drug 
                }
            )
       }
    )
    .catch(
        async (error) => {
            console.log(error);
            res.status(500).json(
                {
                    "message": "failed",
                    "error": error
                }
            );
        }
    )
}

// get drug from db
const getDrugById = async (req,res,next) => {
    // get the drug id from params
    const drug_id= parseInt(req.params.id);
    // get drug from db 
    await findDrugInDb(drug_id)
    .then(
        drug => {
            res.status(200).json(
                {
                    success: true,
                    message: 'getting drug succeeded',
                    drug: drug
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
                    message: 'getting drug failed',
                    error: error
                }
            );
        }
    )
};

// get all products in db
const getAllDrugs = async (req,res,next) => {
    // get drugs from db 
    await getAllDrugsFromDb()
    .then(
        drugs=>{
            res.status(200).json(
                {
                    success: true,
                    message: 'getting all drugs succeeded',
                    drugs: drugs
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
                    message: 'getting all drugs failed',
                    error: error
                }
            );
        }
    )

};

// delete drug
const deleteDrug = async (req,res,next) => {
    // get the drug id from params
    const drug_id = parseInt(req.params.id);
    console.log(drug_id)
    // delete product from db 
    await deleteDrugFromDb(drug_id)
    .then(
        drug => {
            res.status(200).json(
                {
                    success: true,
                    message: 'drug deleted successfully',
                    drug: drug
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
                    message: 'drug deletion failed',
                    error: error
                }
            );
        }
    )

};

export { 
    updateDrug,
    createDrug,
    deleteDrug,
    getAllDrugs,
    getDrugById
};