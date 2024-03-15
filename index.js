//Importations des modules necessaires
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import compression from 'compression'
import helmet from 'helmet'

//Creation de notre application 

//Voir le contenu de .env
import dotenv from 'dotenv'
import { adduser, deleteuser, utilisateursList, updateuser } from "./controllers/utilisateurs.js"
import { addrole, deleteroles, roleList, updateroles } from "./controllers/roles.js"
import { addressList, addressByID, addAddress, updateAddress, deleteAddress } from "./controllers/adress.js";
import { categoryList, categoryByID, addCategory, updateCategory, deleteCategory } from "./controllers/categories.js";
import { orderList, orderByID, addOrder, updateOrder, deleteOrder } from "./controllers/orders.js";
import { paymentList, paymentByID, addPayment, updatePayment, deletePayment } from "./controllers/payments.js";
import { permissionList, permissionByID, addPermission, updatePermission, deletePermission } from "./controllers/permissions.js";
import { productList, productByID, addProduct, updateProduct, deleteProduct } from "./controllers/product.js";
import { reviewList, reviewByID, addReview, updateReview, deleteReview } from "./controllers/reviews.js";
import { taskList, taskByID, addTask, updateTask, deleteTask } from "./controllers/tasks.js";




const env = dotenv.config().parsed

console.log('env',env)

//importer la base de donnee

import database from './config/connexion.js'
import router from './routes/routeroles.js'
import routeruser from './routes/routeusers.js'
import routeradress from './routes/routeAdress.js'
import routercat from './routes/routeCategories.js'
import routerord from './routes/routeORders.js'
import routerpay from './routes/routePayments.js'
import routerper from './routes/routePermissions.js'
import routerprod from './routes/routeProduct.js'
import routerrev from './routes/routeReviews.js'
import routertask from './routes/routeTasks.js'
import routeAuth from './routes/routeAuth.js'





database.sync()

const app = express()

//Utilisation des modules importes
app.use(cors())
app.use(compression())
app.use(helmet())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))





app.use('/utilisateurs' , routeruser)
app.use("/roles" ,router)
app.use("/adress" ,routeradress)
app.use("/categories" ,routercat)
app.use("/orders" ,routerord)
app.use("/payments" ,routerpay)
app.use("/permissions" ,routerper)
app.use("/product" ,routerprod)
app.use("/reviews" ,routerrev)
app.use("/tasks" ,routertask)
app.use('/login', routeAuth)










const port = 5000

app.listen(port, () => console.log(`Notre serveur tourne sur le port ${port}`))


