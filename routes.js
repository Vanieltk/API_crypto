const express = require("express");
const routes = express.Router()



const MoedaController = require("./controllers/MoedaController")
const UsuarioController = require("./controllers/UsuarioController")
const login = require("./middleware/login")
const CompraController = require("./controllers/CompraController")
const TipoController =require("./controllers/TipoController")

routes.get("/moedas", MoedaController.index)
      .post("/moedas",login, MoedaController.store)

routes.get("/usuarios", UsuarioController.index)
      .post("/usuarios", UsuarioController.store)
      .post("/login", UsuarioController.login)

routes.get("/compras", CompraController.compra)
      .delete("/compras/:id", CompraController.delete)
      .put("/compras/:id", CompraController.update)
      .post("/compras", CompraController.store)

routes.get("/tipos",TipoController.tipo)
module.exports = routes