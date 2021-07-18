const express = require("express");
const { User } = require("./user.model");
const { Plant } = require("../Plant/plant.model");
const { auth } = require("../middleware");
const userRouter = express.Router();
const jwt = require("jsonwebtoken");

userRouter.post("/", async (req, res) => {
  try {
    const token = jwt.sign({ name: req.body.name }, process.env.SECRET);
    let user = await User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      token: token,
    });
    user.save();
    // localStorage.setItem('MyToken', token)
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send("error in the user post function in user.routes");
  }
});


userRouter.post("/login", async (req, res) => {
  try {
    const token = jwt.sign({ name: req.body.name }, process.env.SECRET);
    const user = await User.findOne({
      name: req.body.name,
      password: req.body.password,
    });
    user.token = token;
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send({ message: "User not found" });
  }
});

userRouter.get("/all", async (req, res) => {
  try {
    user = await User.find();
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send({ message: "User not found" });
  }
});

userRouter.get("/", auth, async (req, res) => {
  try {
    res.status(200).json(req.user);
  } catch (error) {
    res.status(500).send({ message: "User not found" });
  }
});

userRouter.delete("/", async (req, res) => {
  try {
    console.log(req.body.name);
    await User.deleteOne(req.body);
    res.status(200).send({ message: req.body.name + " deleted" });
  } catch (error) {
    res.status(500).send({ message: "User not found" });
  }
});

userRouter.post("/addplant", async (req, res) => {
  const plant = await Plant.findOne({ name: req.body.plantname });
  if (!plant) {
    res.status(404).send("plant dosn't exsist");
  } else {
    await User.updateOne(
      { name: req.body.username },
      { $addToSet: { plants: plant._id } }
    );
    res.status(201).send("added");
  }
});

userRouter.post("/logout", async (req, res) => {
  try {
    await User.updateOne(
      { name: req.body.username },
      { $pull: { token: req.body.token } }
    );
    res.status(201).send("loged out");
  } catch (error) {
    res.status(500).send("failed logout");
  }
});


module.exports = {
  userRouter,
};
