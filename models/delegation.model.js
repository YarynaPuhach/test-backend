import { Model, DataTypes, Sequelize } from 'sequelize';

class Delegation extends Model { }

export const DelegationMap = (sequelize) => {
  Delegation.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    fullName: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    dateFrom: {
      type: DataTypes.DATE,
      allowNull: false
    },
    dateTo: {
      type: DataTypes.DATE,
      allowNull: false
    },
    departureLocation: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    arrivalLocation: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Delegations',
    timestamps: false
  });
  Delegation.sync();
}

export default Delegation;