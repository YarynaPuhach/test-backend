import { Model, DataTypes } from 'sequelize';

class Invoice extends Model { }

export const InvoiceMap = (sequelize) => {
  Invoice.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    contractorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Contractors',
        key: 'id'
      }
    },
    employeeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Employees',
        key: 'id'
      }
    },
    amount: { // Kwota Netto
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    quantity: { // Ilość
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1 // Domyślna ilość
    },
    description: { // Opis
      type: DataTypes.STRING(255),
      allowNull: true
    },
    mpk: { // MPK
      type: DataTypes.STRING(50),
      allowNull: true
    },
    vatRate: { // VAT
      type: DataTypes.DECIMAL(5, 2), // np. 23.00
      allowNull: false
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Invoices',
    timestamps: false
  });
};

export default Invoice;