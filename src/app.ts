import express from 'express';
var bodyParser = require('body-parser')
require('dotenv').config()
// rest of the code remains same
const app = express();

// connect DB
import DB from '../src/app/models/connectDB'
DB.connectDB()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


// init route
// const routeMap = require('../src/routes/main.route')
import routeMap from '../src/routes/main.route'
routeMap(app)


export default app