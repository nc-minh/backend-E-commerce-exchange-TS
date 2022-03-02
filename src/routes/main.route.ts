// const homeRouter = require('../routes/home.route')
import homeRouter from './home.route'
import accountsRouter from './accounts.route'
function routeMap(app: any): void{

    app.use('/api/accounts', accountsRouter)

    app.use('/', homeRouter)

}

// module.exports = routeMap
export default routeMap