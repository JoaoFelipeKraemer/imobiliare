import ownerController from "../Controllers/ownerController";
import ownerService from "../Services/ownerService";
import Owner from "../database/models/owner";
import auth from "../middlewares/auth";

const express = require('express');

const OwnerService = new ownerService(Owner)
const OwnerController = new ownerController(OwnerService)

const routerOwner = express.Router();


routerOwner.get('/all', auth, OwnerController.getImovel)

export default routerOwner