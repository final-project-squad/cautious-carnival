const express = require("express");
const { getPlant } = require("./plant.controller");
const { user } = require("./plant.model");
// const { auth } = require("../middleware")
const plantRouter = express.Router();

plantRouter.get("/plant", getPlant);
plantRouter.post("/plant");

module.exports = {
  plantRouter,
};
