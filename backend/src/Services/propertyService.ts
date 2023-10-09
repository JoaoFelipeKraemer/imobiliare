import { ModelStatic } from "sequelize";


import propertyModel from '../database/models/property'
import ownerModel from '../database/models/owner'
import Property from "../interfaces/property";

export default class PropertyService {
    _model: ModelStatic<propertyModel>;
    constructor(model: ModelStatic<propertyModel> ) {
        this._model = model;
    }

    createProperty = async(prop:Property, idx:number) => {
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
                 const newUser = await propertyModel.create(newProp);
                const blabla = (Number(newUser.idProperty))
                const blablax = (Number(idx))
                console.log(blabla, blablax)

                if (blablax !== null && blabla !== null) {
                  await ownerModel.create({ clientIdClient: blablax, propertyIdProperty: blabla });
              }
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
          const newUser = await propertyModel.create(newProp)

          const blabla = (Number(newUser.idProperty))
          const blablax = (Number(idx))
          console.log(blabla, blablax)
          if (blablax !== null && blabla !== null) {
            await ownerModel.create({ clientIdClient: blablax, propertyIdProperty: blabla });
        }

          return newUser;
        }if(propriedade){
            return null;
        }
    }

    getAll = async() => {
        const prop = await propertyModel.findAll()
        return prop;
      }
    
    getByAdress = async(address: string) => {
      const client = await propertyModel.findAll({where: { address }})

      if(!client) {
        return null;
      }
      return client;
    }
    getByCity = async(city: string) => {
        const client = await propertyModel.findAll({where: { city }})
  
        if(!client) {
          return null;
        }
        return client;
      } 
      getByState = async(state:string) => {
        const client = await propertyModel.findAll({where: { state }})
  
        if(!client) {
          return null;
        }
        return client;
      }
    getByAvailability = async(availability:string) => {
        const client = await propertyModel.findAll({where: {  availability: availability }})
  
        if(!client) {
          return null;
        }
        return client;
      }
    getByPrice = async(price:number) => {
        const client = await propertyModel.findAll({where: {  price: price }})
  
        if(!client) {
          return null;
        }
        return client;
      }
    // update = async(prop:Property) => {
    //   const property = await propertyModel.findOne({ where: { address: prop.address,
    //     complement: prop.complement } })
    //   if(!property) {
    //     return null;
    //   }
    //   property?.update(
    //     {
    //       address: prop.address,
    //       complement: prop.complement === null? null: prop.complement,
    //       city: prop.city,
    //       state: prop.state,
    //       price: prop.price,
    //       availability: prop.availability,
    //     }
    //   );
    // }  
}