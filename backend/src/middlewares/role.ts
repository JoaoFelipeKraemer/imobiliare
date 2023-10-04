import { Request, Response, NextFunction } from 'express';

const role = (req: Request, res: Response, next: NextFunction) => {
    const { role } = req.body;
    if (role !== 'locador' && role !== 'locatario' && role !== 'comprador' && role !== 'vendedor' && role !== 'default') {
        return res.status(401).json({ message: 'role inválido' });
    }

    next();
}

export default role;