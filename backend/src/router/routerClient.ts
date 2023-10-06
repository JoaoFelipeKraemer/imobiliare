import ClientController from "../Controllers/client.Controller";
import ClientService from "../Services/clientService";
import Client from "../database/models/client";
import auth from "../middlewares/auth";
import role from "../middlewares/role";

const express = require('express');

const clientService = new ClientService(Client)
const clientController = new ClientController(clientService)

const routerClient = express.Router();

routerClient.post('/register', clientController.createClient)
routerClient.post('/login', clientController.login)
routerClient.get('/role', auth, clientController.getRole)
routerClient.get('/client', auth, clientController.getAll)
routerClient.get('/client/:idClient', auth, clientController.getById)
routerClient.put('/role', auth, role, clientController.updateRole)
routerClient.put('/edit', auth, clientController.uptate)


export default routerClient