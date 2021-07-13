const {Plant} = require('./plant.model')

exports.getPlant = async (req,res) => {
    try {
        const plants = await Plant.find({});
        res.status(200).json(plants)
    } catch (error) {
        res.status(500).send({message:"Plant not found"})
    }
}

exports.createPlant = async(req, res) => {
    try {
        const plant = await Plant.create({
            name: req.body.name,
            maintenance: req.body.maintenance, 
            watering: req.body.watering,
            lighting: req.body.lighting,
            petFriendly: req.body.petFriendly, 
            indoor: req.body.indoor,
            notes: req.body.indoor
        });
        res.status(201).send("New plant created successfully!");
    } catch (error) {       
        console.log(`${error} didn't add it!`);
        res.status(400).send(`Error: ${error}`);
    }
}