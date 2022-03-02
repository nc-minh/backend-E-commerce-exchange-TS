import express from 'express'
const router = express.Router()

import { RegisterControllersClass } from '../app/controllers/accounts/register.controllers'

router.post('/register', RegisterControllersClass.register)

// module.exports = router
export default router