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
    getAll = async(req:Request, res:Response) => {
        const all = await this._service.getAll()
        return res.status(200).json(all)
    }
    getByAdress = async(req:Request, res:Response) => {
        const { address } = req.body;
        const client = await this._service.getByAdress(address)
        if(!client){
            return res.status(401).json({message: 'NOTHING HERE MODAFUCKA'})
        }
        return res.status(200).json(client)
    }
}
