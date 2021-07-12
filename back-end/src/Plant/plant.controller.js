const {Plant} = require('./plant.model')

exports.getPlant = async (req,res) => {
    try {
        res.status(200).json(req.plant)
    } catch (error) {
        res.status(500).send({message:"Plant not found"})
    }
}

exports.createPlant = async (res,req) => {
    try {
        const plant = new Plant(req.body)
    } catch (error) {        
        res.status(500).send({message:"Plant not created"})
    }
}