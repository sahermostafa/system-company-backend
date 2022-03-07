const mongoose = require('mongoose')
const Joi = require('joi')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    fullname:{
        type:String,
        required:true,
        minlength:3,
    },
    email:{
        type:String,
        unique:true,
        required:true,
        minlength:3,
    },
    password:{
        type:String,
        required:true,
        minlength:8,
    },
   
})
userSchema.methods.generateToken = function() {
    const token = jwt.sign({_id:this._id},'privateKey')
    return token
}
function userValidate(user){
    const schema = {
        fullname:Joi.string().min(3).required(),
        email:Joi.string().min(3).required(),
        password:Joi.string().min(8).required(),
    }
    return Joi.valid(user,schema)
}
let User = mongoose.model('User',userSchema);
module.exports ={User,userValidate}