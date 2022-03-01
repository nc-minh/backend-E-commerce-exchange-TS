var mongoose = require('mongoose')
const Schema = mongoose.Schema
var mongooseDelete = require('mongoose-delete')

const Accounts = new Schema({
    username: String,
    password: String,
    role: String,
    image: String,
    email: String,
    address: String
},{
    collection: 'Accounts'
})

Accounts.plugin(mongooseDelete, { 
    deletedAt : true,
    deletedBy : true,
    overrideMethods: 'all' 
})

const accountsModel = mongoose.model('Accounts', Accounts)

module.exports = accountsModel