import { Model, DataTypes } from 'sequelize';

class Employee extends Model { }

export const EmployeeMap = (sequelize) => {
  Employee.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    firstName: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    position: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    hireDate: { // Data zatrudnienia
      type: DataTypes.DATE,
      allowNull: false
    },
    vacationDays: { // Ilość dni urlopowych
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0 // Default to 0 if not specified
    }
  }, {
    sequelize,
    tableName: 'Employees',
    timestamps: false
  });
};

export default Employee;