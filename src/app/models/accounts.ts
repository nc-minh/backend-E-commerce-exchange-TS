const mongoose = require('mongoose')
// const Schema = mongoose.Schema
import { Document, model, Schema } from 'mongoose'

export interface User extends Document{
    username: string;
    password: string;
    role?: string;
    address?: string;
    avatar?: string;
}

const Accounts = new Schema({
    username: {
        type: Schema.Types.String,
        required: true,
        trim: true,
        maxlength: 100,
        minlength: 5
    },
    password: String,
    role: String,
    avatar: {
        type: Schema.Types.String,
        trim: true,
    },
    email: String,
    address: String
},{
    collection: 'Accounts'
})


export const accountsModel = model<User>('Accounts', Accounts)