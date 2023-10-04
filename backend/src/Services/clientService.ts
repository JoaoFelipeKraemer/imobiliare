import { ModelStatic } from "sequelize";

const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);

import clientModel from '../database/models/client'

export default class ClientService {
    _model: ModelStatic<clientModel>;
    constructor(model: ModelStatic<clientModel> ) {
        this._model = model;
    }

    createClient = async(emailX:string, password: string, nome: string ) => {
        const cliente = await clientModel.findOne({ where: { email: emailX } });
        if(!cliente) {
          const hash = bcrypt.hashSync(password, salt);
          const newUser = await clientModel
          .create({ email: emailX, role: 'default', passwordHash: hash, name: nome})
          return newUser.idClient;
        }if(cliente){
            return null;
        }
    }

    login = async(emailX:string, password: string) => {
      const client = await clientModel.findOne({ where: { email: emailX} });
      if (!client) {
        return null;
      }
      const hash = bcrypt.compareSync(password, client.dataValues.passwordHash);
      if(hash) {
        const { password: _, ...clientWithoutPassword } = client.dataValues
        return clientWithoutPassword;
      }
    }
}