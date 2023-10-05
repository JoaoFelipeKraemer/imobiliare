import { ModelStatic } from "sequelize";


import propertyModel from '../database/models/property'
import Property from "../interfaces/property";

export default class PropertyService {
    _model: ModelStatic<propertyModel>;
    constructor(model: ModelStatic<propertyModel> ) {
        this._model = model;
    }

    createProperty = async(prop:Property) => {
        if(prop.complement === undefined) {
            const propriedade = await propertyModel.findOne({ where: { address: prop.address } });
            if(!propriedade) {
                const newProp =  {
                       address: prop.address,
                       complement: null,
                       city: prop.city,
                       state: prop.state,
                       price: prop.price,
                       availability: prop.availability,
                   }
                 const newUser = await propertyModel
                 .create(newProp)
                 return newUser;
               }if(propriedade){
                   return null;
               }
        }
        const propriedade = await propertyModel.findOne({ where: { address: prop.address,
            complement: prop.complement } });
        if(!propriedade) {
         const newProp =  {
                address: prop.address,
                complement: prop.complement,
                city: prop.city,
                state: prop.state,
                price: prop.price,
                availability: prop.availability,
            }
          const newUser = await propertyModel
          .create(newProp)
          return newUser;
        }if(propriedade){
            return null;
        }
    }
}