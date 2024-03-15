import { Router } from "express";

import { login } from "../authentifications/login.js";

import loginRules from "../validations/validationlogin.js";

const routeAuth=Router()

routeAuth.post('/',loginRules, login)

export default routeAuth