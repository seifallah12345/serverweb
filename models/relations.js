//Importer les modeles
import utilisateurs from "./utilisateurs.js";
import roles from "./roles.js";
import addresses from "./adress.js";
import categories from "./categories.js";
import orders from "./orders.js";
import payments from "./payments.js";
import permissions from "./permissions.js";
import products from "./product.js";
import reviews from "./reviews.js";
import tasks from "./tasks.js";
import { or } from "sequelize";


roles.hasMany(utilisateurs)
utilisateurs.belongsTo(roles)
addresses.hasMany(utilisateurs)
utilisateurs.belongsTo(addresses)
categories.hasMany(products)
products.belongsTo(categories)
products.hasMany(orders)
orders.hasMany(products)
orders.belongsTo(utilisateurs)
utilisateurs.hasMany(orders)
addresses.hasMany(orders)
orders.belongsTo(addresses)
payments.belongsTo(utilisateurs)
utilisateurs.hasMany(payments)
orders.belongsTo(payments)
payments.hasMany(orders)
permissions.hasMany(utilisateurs)
permissions.hasMany(roles)
roles.hasMany(permissions)
utilisateurs.hasMany(permissions)
reviews.belongsTo(utilisateurs)
utilisateurs.hasMany(reviews)
products.hasMany(reviews)
reviews.belongsTo(products)
tasks.belongsTo(utilisateurs)
utilisateurs.hasMany(tasks)
tasks.belongsTo(roles)
roles.hasMany(tasks)

export {utilisateurs, roles ,addresses,categories,orders,payments,permissions,products,reviews,tasks}