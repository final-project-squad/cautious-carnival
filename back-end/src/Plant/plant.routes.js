const express = require("express");

const { getPlant, createPlant } = require("./plant.controller");
const { plant } = require("./plant.model");
const plantRouter = express.Router();

plantRouter.get("/plant", getPlant);
plantRouter.post("/plant", createPlant);

module.exports = {
  plantRouter,
};
