import { INTEGER, Model } from 'sequelize';
import db from '.';
import Client from './client';
import Property from './property';

class Owner extends Model {
    declare clientIdClient: number;
    declare propertyIdProperty: number;
}

Owner.init({
    clientIdClient: {
      type: INTEGER,
      allowNull: false,
      field: 'client_id_client',
      references: {
        model: 'clients',
        key: 'id_client',
      }
    },
    propertyIdProperty: {
      type: INTEGER,
      allowNull: false,
      field: 'property_id_property',
      references: {
        model: 'property',
        key: 'id_property',
      }
    },
}, {
    sequelize: db,
    modelName: 'owners',
    underscored: true,
    timestamps: false,
});

Client.hasMany(Owner, { foreignKey: 'clientIdClient' });
Owner.belongsTo(Client, { foreignKey: 'clientIdClient' });
Property.hasOne(Owner, { foreignKey: 'propertyIdProperty' });
Owner.belongsTo(Property, { foreignKey: 'propertyIdProperty' });



export default Owner;