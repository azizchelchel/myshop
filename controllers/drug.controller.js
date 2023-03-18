
import {
    updateDrugInDb,
    createDrugInDb,
    getAllDrugsFromDb,
    findDrugInDb,
    deleteDrugFromDb
} from '../models/drug.model.js';
import {
    createDrugSchema,
    updateDrugSchema
} from '../routes/dataValidation/validator.js';

// create new drug
export const createDrug = async (req,res,next) => {
    // get the data from request
    const data = req.body;
    const {error, value} = createDrugSchema.validate(req.body, {abortEarly:false});
    if(!error){
        try {
            const drug= await createDrugInDb(data);
            res.status(200).json(
                {
                    success: true,
                    message: 'drug created successfully',
                    drug: drug
                }
            );
        } catch (error) {
            console.log('error', error);
            res.status(500).json(
                {
                    success: false,
                    message: error.message,
                }
            );
        }
    }
    else
    {
        let messages = [];
        error.details.map(e => messages.push(e.message));
        res.status(400).send(
            {
                success: false,
                message: messages,
            }
        );
    }
    
};

// update drug
export const updateDrug = (req,res,next) => {
    // new data to update with
    const data = req.body;
    const {error, value} = updateDrugSchema.validate(req.body, {abortEarly:false});
    if (!error){
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
                    success: false,
                    error: error
                }
            );
        }
    )
    }
    else
    {
        let messages = [];
        error.details.map(e => messages.push(e.message));
        res.status(400).send(
            {
                success: false,
                message: messages,
            }
        );
    }
    
    
}

// get all products in db
export const getAllDrugs = async (req,res,next) => {
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

// get drug from db
export const getDrugById = async (req,res,next) => {
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

// delete drug
export const deleteDrug = async (req,res,next) => {
    // get the drug id from params
    const id = parseInt(req.params.id);
    // delete product from db 
    await deleteDrugFromDb(id)
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
