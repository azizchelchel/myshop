import Prisma from '@prisma/client';
const prisma = new Prisma.PrismaClient();

// existing permissions in DB
const getAllPermissions = async () => {
    try {
        const json = await prisma.permissions.findMany({});
        const output = json.reduce((acc, { permissionCode, permissionName }) =>
            Object.assign(acc, { [permissionName]: permissionCode }), {});
        return json;
    } catch (error) {
        console.log(error);
        return null;
    }
};
const allPermissions = await getAllPermissions();


export {allPermissions};