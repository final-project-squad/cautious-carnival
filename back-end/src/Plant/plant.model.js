const mongoose = require('mongoose')

const PlantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    maintenance:{
        type:String
    },
    watering: {
        type: Boolean
    },
    lighting :{
        type: Boolean
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

const Plant = mongoose.model('Plant',PlantSchema);

module.exports = { 
    Plant
}

