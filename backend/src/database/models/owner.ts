import { INTEGER, Model } from 'sequelize';
import db from '.';
import Client from './client';
import Property from './property';

class Owner extends Model {
    declare id: number; // Declare the 'id' property
    declare clientIdClient: number;
    declare propertyIdProperty: number;
}

Owner.init(
  {
    id: {
      type: INTEGER,
      allowNull: false,
      primaryKey: true, // Specify 'id' as the primary key
      autoIncrement: true, // Enable auto-increment
    },
    clientIdClient: {
      type: INTEGER,
      allowNull: false,
      field: 'client_id_client',
      references: {
        model: 'clients',
        key: 'id_client',
      },
    },
    propertyIdProperty: {
      type: INTEGER,
      allowNull: false,
      field: 'property_id_property',
      references: {
        model: 'property',
        key: 'id_property',
      },
    },
  },
  {
    sequelize: db,
    modelName: 'owners',
    underscored: true,
    timestamps: false,
    indexes: [
      {
        unique: true, // Composite primary key is unique
        fields: ['clientIdClient', 'propertyIdProperty'],
      },
    ],
  }
);

Client.hasMany(Owner, { foreignKey: 'clientIdClient' });
Owner.belongsTo(Client, { foreignKey: 'clientIdClient' });
Property.hasOne(Owner, { foreignKey: 'propertyIdProperty' });
Owner.belongsTo(Property, { foreignKey: 'propertyIdProperty' });

export default Owner;
