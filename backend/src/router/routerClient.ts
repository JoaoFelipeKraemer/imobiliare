import ClientController from "../Controllers/client.Controller";
import ClientService from "../Services/clientService";
import Client from "../database/models/client";

const express = require('express');

const clientService = new ClientService(Client)
const clientController = new ClientController(clientService)

const routerClient = express.Router();

routerClient.post('/register', clientController.createClient)