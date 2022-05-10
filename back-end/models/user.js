const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    prefix: String,
    fname: String,
    lname: String,
    type_card: String,
    card: String,
    day:String,
    mount:String,
    year:String,
    address: String,
    phone: String,
    dis: String,
    dis1: String,
    dis2: String,
  })

const UserModel = mongoose.model('user', userSchema, 'user')

module.exports = UserModel


