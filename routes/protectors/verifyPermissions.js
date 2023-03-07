export const verifyPermission = (...allowedPermissions) => {
    return (req, res, next) => {
        if (!req?.permissions) return res.sendStatus(401); //unauthorized
        // console.log(req.permissions);

        const allowedPerms = [...allowedPermissions];
        const myArray = Object.values(req.permissions);
        const hasPermissions = myArray.map(permission => allowedPerms.includes(permission)).find(val => val === true);
        if (hasPermissions){
            next();
        }else{
            res.sendStatus(401); //unauthorized
        }
    }
}
