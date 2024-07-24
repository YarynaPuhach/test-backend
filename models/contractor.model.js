import { Model, DataTypes } from 'sequelize';

class Contractor extends Model { }

export const ContractorMap = (sequelize) => {
  Contractor.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    nip: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    regon: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    vatPayer: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    street: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    houseNumber: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    apartmentNumber: {
      type: DataTypes.STRING(10)
    },
    deleted: { // Soft delete flag
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    sequelize,
    tableName: 'Contractors',
    timestamps: false
  });
};

export default Contractor;