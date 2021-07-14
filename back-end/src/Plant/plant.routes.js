const express = require("express");
const { Plant } = require('./plant.model')
const plantRouter = express.Router();

plantRouter.post("/", async(req, res) => {
  try {
    console.log("test")
      const plant = await Plant.create({
          name: req.body.name,
          maintenance: req.body.maintenance, 
          watering: req.body.watering,
          lighting: req.body.lighting,
          petFriendly: req.body.petFriendly, 
          indoor: req.body.indoor,
          notes: req.body.notes,
      });
      res.status(200).send(plant);
  } catch (error) {       
      console.log(`${error} didn't add it!`);
      res.status(400).send(`Error: ${error}`);
  }
})


plantRouter.get("/", async (req,res) => {
    try {
    console.log(req.body)
    const plants = await Plant.find(req.body);
    res.status(200).send(plants)
  } catch (error) {
      res.status(500).send({message:"Plant not found"})
  }
})


module.exports = {
  plantRouter,
}


