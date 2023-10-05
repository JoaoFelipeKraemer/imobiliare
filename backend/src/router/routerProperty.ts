import PropertyController from "../Controllers/propertyController";
import PropertyService from "../Services/propertyService";
import Property from "../database/models/property";
import auth from "../middlewares/auth";


const express = require('express');

const propertyService = new PropertyService(Property)
const propertyController = new PropertyController(propertyService)

const routerProperty = express.Router();

routerProperty.post('/register', auth, propertyController.createProperty)
routerProperty.get('/all', auth, propertyController.getAll)


export default routerProperty