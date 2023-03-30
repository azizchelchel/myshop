import express from "express";
import {
    createUser,
    deleteUser,
    updateUserInfo,
    updatePermissions,
    selfUpdatePassword
} from '../controllers/users.controller.js';
import {jwtProtector} from '../middlewares/protectors/authProtector.js';
import {verifyPermission} from '../middlewares/protectors/verifyPermissions.js';
import {auditTrailMiddleware} from '../middlewares/audit/audit.js';

const router = express.Router();

router.post('/createUser', 
            jwtProtector,
            verifyPermission('PC456'),
            auditTrailMiddleware,
            createUser
            );                  //create new user
router.delete('/deleteUser',
              jwtProtector,
              verifyPermission('PC789'),
              auditTrailMiddleware,
              deleteUser
              );                //(jwtProtector, verifyPermission('PC321'))delete user
router.patch('/updateUserInfo/:id', 
             jwtProtector,
             verifyPermission('PC789'),
             auditTrailMiddleware,
             updateUserInfo
             );                                              //update user info
router.patch('/selfUpdatePassword/:id',
             jwtProtector,
             auditTrailMiddleware,
             selfUpdatePassword
             );                                      //self update password
router.put('/updatePermissions/:id',
            jwtProtector,
            verifyPermission('PC789'),
            auditTrailMiddleware,
            updatePermissions
            ); //( jwtProtector, verifyPermission('PC654'),)update permissions

export default router;