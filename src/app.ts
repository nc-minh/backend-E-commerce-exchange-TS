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
const route = require('../src/routes/main.route')
route(app)


export default app