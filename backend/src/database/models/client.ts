import { INTEGER, Model, STRING } from 'sequelize';
import db from '.';

class Client extends Model {
    declare idClient: number;
    declare email: string;
    declare role: string;
    declare passwordHash: string;
    declare name: string;
}

Client.init({
    idClient: {
      type: INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: STRING,
      allowNull: false,
    },
    role: {
        type: STRING,
        allowNull: false,
    },
    passwordHash: {
        type: STRING,
        allowNull: false,
        field: 'password_hash',
    },
    name: {
        type: STRING,
        allowNull: false
    },
}, {
    sequelize: db,
    modelName: 'client',
    underscored: true,
    timestamps: false,
});

export default Client;