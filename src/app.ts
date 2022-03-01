import express from 'express';
var bodyParser = require('body-parser')
// rest of the code remains same
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res, next): any => {
    res.send('Testing....................')
})

app.post('/test', (req, res, next) => {
    const test: string = req.body.test

    res.json(test)
})


export default app