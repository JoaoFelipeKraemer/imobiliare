import { Request, Response } from 'express';
import ClientService from '../Services/clientService';

export default class ClientController {
    _service: ClientService;
    constructor(service: ClientService) {
        this._service = service;
    }

    createClient = async (req: Request, res: Response) => {
        const { email, password, name } = req.body;
        const userId = await this._service.createClient(email,password, name)
        if(userId === null) {
            return res.status(409).send({message: 'Cliente já registrado'})
        }
        return res.status(200).send({message: 'Cliente registrado'})
    }
}