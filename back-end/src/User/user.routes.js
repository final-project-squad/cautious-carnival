const express = require("express");
const { User } = require("./user.model");
const { Plant } = require("../Plant/plant.model");
const { auth } = require("../middleware")
const userRouter = express.Router();
const jwt = require("jsonwebtoken")

userRouter.post("/", async (req, res) => {
  
   try {
    const token = jwt.sign({ name: req.body.name }, process.env.SECRET)
    let user = await User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      token: token,
    });
    User.save();
    // localStorage.setItem('MyToken', token)
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send("error in the user post function in user.routes");
  }
});

userRouter.post("/addplant", async (req, res) => {
  const plant = await Plant.findOne({ name: req.body.plantname });
  console.log(plant);
  if (!movie) {
    res.status(404).send("movie dosn't exsist");
  } else {
    await User.updateOne(
      { name: req.body.username },
      { $addToSet: { plants: plant._id } }
    );    
    res.status(201).send("added");
  }
});


userRouter.get("/",  async (req,res) => {
  try {
    const user = await User.find({})
      res.status(200).send(user)
  } catch (error) {
      res.status(500).send({message:"User not found"})
  }
})

module.exports = {
  userRouter
};
