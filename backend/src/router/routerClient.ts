import ClientController from "../Controllers/client.Controller";
import ClientService from "../Services/clientService";
import Client from "../database/models/client";
import auth from "../middlewares/auth";

const express = require('express');

const clientService = new ClientService(Client)
const clientController = new ClientController(clientService)

const routerClient = express.Router();

routerClient.post('/register', clientController.createClient)
routerClient.post('/login', clientController.login)
routerClient.get('/role', auth, clientController.getRole)

export default routerClient