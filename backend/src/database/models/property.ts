import { INTEGER, Model, STRING } from 'sequelize';
import db from '.';

class Properties extends Model {
    declare idProperty: number;
    declare address: string;
    declare complement?: string;
    declare city: string;
    declare state: string;
    declare price: string;
    declare availability: string;
}

Properties.init({
    idProperty: {
      type: INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    address: {
      type: STRING,
      allowNull: false
    },
    complement: {
      type: STRING,
      allowNull: true
    },
    city: {
      type: STRING,
      allowNull: false
    },
    state: {
      type: STRING,
      allowNull: false
    },
    price: {
      type: INTEGER,
      allowNull: false
    },
    availability: {
      type: STRING,
      allowNull: false
    },
}, {
    sequelize: db,
    modelName: 'properties',
    underscored: true,
    timestamps: false,
});

export default Properties;