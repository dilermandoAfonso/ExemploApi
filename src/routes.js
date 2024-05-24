const express = require("express");
const routes = express.Router();

const ComidaController = require("./app/controller/comidacontroller");

routes.get("/comida",ComidaController.getAll);

routes.post("/comida",ComidaController.store);

routes.delete("/comida",ComidaController.delete);

routes.update("/comida",ComidaController.update);

 module.exports = routes;