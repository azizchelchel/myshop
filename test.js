const permissions  = ["a", "b", "c", "d"];
const userPermissions = ["c", "d", "e"];

const hasPermissions = userPermissions.map(permission => permissions.includes(permission)).find(val => val === true);

console.log( hasPermissions)