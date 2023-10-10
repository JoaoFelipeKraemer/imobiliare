import { Request, Response } from 'express';
import ownerService from '../Services/ownerService';

export default class PropertyController {
    _service: ownerService;
    constructor(service: ownerService) {
        this._service = service;
    }
    getImovel = async (req: Request, res: Response) => {
        const { payload } = req.body.user
        const data = await this._service.getImovel(payload.id)
        if(data === null) {
            return res.status(409).send({message: 'Sem imóveis'})
        }
        return res.status(200).send(data)
    }
}
    

