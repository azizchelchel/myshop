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

router.post('/createUser', jwtProtector, verifyPermission('PC789'), createUser);                  //create new user
router.delete('/deleteUser', jwtProtector, verifyPermission('PC321'), deleteUser);                //delete user
router.patch('/updateUserInfo/:id', updateUserInfo);                                              //update user info
router.patch('/selfUpdatePassword/:id', selfUpdatePassword);                                      //self update password
router.put('/updatePermissions/:id', jwtProtector, verifyPermission('PC654'), updatePermissions); //update permissions

export default router;