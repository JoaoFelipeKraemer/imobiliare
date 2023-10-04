import { Request, Response, NextFunction } from 'express';
const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET || 'jwt_secret';

const auth = (req: Request, res: Response, next: NextFunction) => {
 const { authorization } = req.headers;
 if (!authorization){
    return res.status(401).send({message: "token not found" });
 }
 try {
    const payload = jwt.verify(authorization, secret);
    req.body.user = { payload }
    next()
 } catch (error) {
    return res.status(401).send({message: "token not valid"})
 }

}

export default auth;