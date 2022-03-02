const homeRouter = require('../routes/home.route')
function routeMap(app: any): void{
    
    app.use('/', homeRouter)

}

module.exports = routeMap