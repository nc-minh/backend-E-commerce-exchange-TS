import express from 'express'
const router = express.Router()

import { HomeControllersClass } from '../app/controllers/home.controllers'

router.get('/', HomeControllersClass.index)

module.exports = router