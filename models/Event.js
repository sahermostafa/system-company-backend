const mongoose = require('mongoose')
const joi = require('joi')

const eventSchema = new mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    salary:{
        type:String,
        required:true
    },
    der:{
        type:String,
        required:true
    },
    decu:{
        type:String,
        required:true
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
})
function eventValidate(event){
    const schema = {
        fullname:joi.string().min(3).required()
    }
    return joi.valid(event,schema)
}
function eventPutValidate(event){
    const schema = {
        fullname:joi.string().min(3).required()
    }
    return Joi.valid(event,schema)
}

let Event = mongoose.model('Event',eventSchema);
module.exports ={Event,eventValidate,eventPutValidate}


//exports.eventValidate=eventValidate;
//exports.eventValidate=eventPutValidate;
