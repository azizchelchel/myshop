import express from "express";
import {
    createUser,
    deleteUser,
    updateUserInfo,
    updatePermissions,
    selfUpdatePassword
} from '../controllers/users.controller.js';
import {jwtProtector} from './protectors/authProtector.js';
import {verifyPermission} from './protectors/verifyPermissions.js';

const router = express.Router();

router.post('/createUser', createUser);                  //create new user
router.delete('/deleteUser', deleteUser);                //(jwtProtector, verifyPermission('PC321'))delete user
router.patch('/updateUserInfo/:id', updateUserInfo);                                              //update user info
router.patch('/selfUpdatePassword/:id', selfUpdatePassword);                                      //self update password
router.put('/updatePermissions/:id', updatePermissions); //( jwtProtector, verifyPermission('PC654'),)update permissions

export default router;