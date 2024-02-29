//Importer les modeles
import utilisateurs from "./utilisateurs.js";
import roles from "./roles.js";

roles.hasMany(utilisateurs)
utilisateurs.belongsTo(roles)

export {utilisateurs, roles}