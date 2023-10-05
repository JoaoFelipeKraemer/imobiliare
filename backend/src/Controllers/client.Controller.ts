import { Request, Response } from 'express';
import ClientService from '../Services/clientService';
const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET || 'jwt_secret';


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
        return res.status(201).send({message: 'Cliente registrado'})
    }

    login = async (req:Request, res:Response) => {
        const { email, password } = req.body;
        const user = await this._service.login(email, password);
        if(!user) {
          return res.status(401).json({ message: 'não autorizado'})  
        }
        if(user) {
        const token = jwt.sign({id: user.idClient}, secret, { algorithm: 'HS256', expiresIn: '1d' });
        return res.status(200).json({ token, id: user.idClient});
        }
    }

    getRole = async(req:Request, res:Response) => {
        const { email } = req.body
        const client = await this._service.getRole(email)
        if (!client) {
            return res.status(401).json({ message: 'erro'})
          }
        return res.status(200).json({role: client});
    }

    updateRole = async(req:Request, res:Response) => {
        const { payload } = req.body.user;
        const { role } = req.body;
        await this._service.updateRole(payload.id, role)
        return res.status(200).json({message: 'role alterada com sucesso'})
        
    }

    getAll = async(req:Request, res:Response) => {
        const all = await this._service.getAll()
        return res.status(200).json(all)
    }
}