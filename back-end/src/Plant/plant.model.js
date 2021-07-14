const mongoose = require('mongoose')

const plantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    maintenance:{
        type:String
    },
    watering: {
        type: String
    },
    lighting :{
        type: String
    },
    petFriendly :{
        type: Boolean
    },
    indoor :{
        type:Boolean
    },
    notes :{
        type: String
    }
})

const Plant = mongoose.model('Plant',plantSchema);


module.exports = { 
    Plant
}

