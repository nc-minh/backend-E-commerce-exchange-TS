import express from 'express'
const router = express.Router()

import { RegisterControllersClass } from '../app/controllers/accounts/register.controllers'
import { LoginControllersClass } from './../app/controllers/accounts/login.controllers'

router.post('/register', RegisterControllersClass.register)

router.post('/login', LoginControllersClass.login)

// module.exports = router
export default router