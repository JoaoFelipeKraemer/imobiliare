import { Request, Response, NextFunction } from 'express';

const addressCheck = (req: Request, res: Response, next: NextFunction) => {
    const { address } = req.body
    const enderecoRegex = /^[\w\s]+,\s\d+$/;

   
    if (!enderecoRegex.test(address)) {
      res.status(400).json({message: 'deu ruim meu bom'})
    } 
     next();
};

export default addressCheck;

