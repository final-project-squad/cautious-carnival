const express = require("express");
const { getUser } = require("./user.controller");
const { user } = require("./user.model");
const { auth } = require("../middleware")
const userRouter = express.Router();

userRouter.get("/user", auth, getUser);
userRouter.post("/user");

module.exports = {
  userRouter
};
