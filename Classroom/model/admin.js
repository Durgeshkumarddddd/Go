const mongoose = require('mongoose')
const {Schema }= mongoose.Schema ;

const adminSchema = new Schema({
    name : String,
    username : String,
})
module.exports= mongoose.model('Admin', adminSchema)
