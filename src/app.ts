import express from 'express';
var bodyParser = require('body-parser')
require('dotenv').config()
// rest of the code remains same
const app = express();

const Accounts = require('../src/app/models/Accounts')

// connect DB
const DB = require('../src/app/models/connectDB')
DB.connect()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', async(req, res, next) => {

    await Accounts.find({})
        .then((data: Object) => {
            console.log(typeof data)
            res.json({
                data: data
            })
        })
        })
    

app.post('/test', (req, res, next): any => {
    const test: string = req.body.test

    res.json(test)
})


export default app