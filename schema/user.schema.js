const mongoose = require("mongoose")
const {Schema} = mongoose

const userSchema = new Schema({
    fullname: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    mobile:{
        type: String,
        required: true,
        trim: true,
    }
})


module.exports = mongoose.model('User',userSchema)