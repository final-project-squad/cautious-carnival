const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const plantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    Maintenance:{
        type:String
    },
    watering: {
        type: Boolean
    },
    Lighting :{
        type: Boolean
    },
    PetFriendly :{
        type: Boolean
    },
    indoor :{
        type:Boolean
    },
    Notes :{
        type: String
    }
})

const Plant = mongoose.model('Plant',plantSchema);

module.exports = { 
    Plant
}

