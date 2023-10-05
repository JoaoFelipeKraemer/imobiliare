import { Request, Response } from 'express';
import propertyService from '../Services/propertyService';
import Property from '../interfaces/property';

export default class PropertyController {
    _service: propertyService;
    constructor(service: propertyService) {
        this._service = service;
    }

    createProperty = async (req: Request, res: Response) => {
        const { address, complement, city, state, price, availability } = req.body;
        const x = 
        {
            address,
            complement,
            city,
            state,
            price,
            availability
        }
        const prop = await this._service.createProperty(x as Property)
        if(prop === null) {
            return res.status(409).send({message: 'Imóvel já registrado'})
        }
        return res.status(201).send({message: 'Imóvel registrado'})
    }

}
