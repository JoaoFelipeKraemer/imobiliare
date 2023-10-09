import PropertyController from "../Controllers/propertyController";
import PropertyService from "../Services/propertyService";
import Property from "../database/models/property";
import addressCheck from "../middlewares/address";
import auth from "../middlewares/auth";


const express = require('express');

const propertyService = new PropertyService(Property)
const propertyController = new PropertyController(propertyService)

const routerProperty = express.Router();

routerProperty.post('/register', auth, propertyController.createProperty)
routerProperty.get('/all', auth, propertyController.getAll)
routerProperty.get('/address', auth, propertyController.getByAdress)
routerProperty.get('/city', auth, propertyController.getByCity)
routerProperty.get('/state', auth, propertyController.getByState)
routerProperty.get('/availability', auth, propertyController.getByAvailability)
routerProperty.get('/price', auth, propertyController.getByPrice)
// routerProperty.put('/edit', auth, propertyController.update)



export default routerProperty