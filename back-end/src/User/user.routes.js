const express = require("express");
const { User } = require("./user.model");
const { auth } = require("../middleware")
const userRouter = express.Router();
const jwt = require("jsonwebtoken")


userRouter.post("/", async (req, res) => {
   try {
    const token = jwt.sign({ name: req.body.name }, process.env.SECRET)
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      token: token,
    });
    // localStorage.setItem('MyToken', token)
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send("error in the user post function in user.routes");
  }
});

// userRouter.post("/login"

// )

userRouter.get("/",  async (req,res) => {
  try {
    console.log(req.body)
    const user = await User.findOne({})
      res.status(200).send(user)
  } catch (error) {
      res.status(500).send({message:"User not found"})
  }
})

module.exports = {
  userRouter
};
