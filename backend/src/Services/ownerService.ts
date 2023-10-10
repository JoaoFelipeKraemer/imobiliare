import { ModelStatic } from "sequelize";


import propertyModel from '../database/models/property'
import ownerModel from '../database/models/owner'
import clientModel from '../database/models/client'


export default class PropertyService {
    _model: ModelStatic<ownerModel>;
    constructor(model: ModelStatic<ownerModel> ) {
        this._model = model;
    }

getImovel = async  (id: number) => { 
    const getClient = await clientModel.findOne({where : { idClient: id},
         attributes: { exclude: ['passwordHash']} })
    const imovelData = await  ownerModel.findAll({ where: { clientIdClient: id  },
      include: [
        { model: propertyModel },
    ],
  });
  const x = {
    Owner: getClient,
    imovelData
  }
  if(!imovelData) {
    return null
  }
  return x;
 }

}






