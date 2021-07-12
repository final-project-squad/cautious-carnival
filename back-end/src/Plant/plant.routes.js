const { router } = require("express");
const { getUser } = require("./plant.controller");
const { user } = require("./plant.model");
const { auth } = require("../middleware")
const plantRouter = Router();

plantRouter.get("/plant", auth, getUser);
plantRouter.post("/plant");

module.exports = {
  plantRouter,
};
