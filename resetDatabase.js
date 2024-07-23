import { Sequelize } from 'sequelize';
import { ContractorMap } from './models/contractor.model.js';
import { EmployeeMap } from './models/employee.model.js';
import { InvoiceMap } from './models/invoice.model.js';
import { DelegationMap } from './models/delegation.model.js';
import fs from 'fs';
import path from 'path';

// Зчитування конфігураційного файлу
const env = process.env.NODE_ENV || 'development';
const configPath = path.resolve('./config/config.json');
const config = JSON.parse(fs.readFileSync(configPath, 'utf8'))[env];

// Налаштування підключення до бази даних
const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect,
  dialectOptions: config.dialectOptions,
  logging: false // Вимкнути логування SQL-запитів
});

// Ініціалізація моделей
ContractorMap(sequelize);
EmployeeMap(sequelize);
InvoiceMap(sequelize);
DelegationMap(sequelize);

// Видалення всіх таблиць
async function dropTables() {
  await sequelize.drop();
  console.log('All tables dropped!');
}

// Створення таблиць
async function createTables() {
  await sequelize.sync({ force: true }); // force: true - видаляє існуючі таблиці перед створенням нових
  console.log('All tables created!');
}

// Головна функція для видалення і створення таблиць
async function resetDatabase() {
  try {
    await dropTables();
    await createTables();
  } catch (error) {
    console.error('Error resetting the database:', error);
  } finally {
    await sequelize.close();
  }
}

// Виклик функції для скидання бази даних
resetDatabase();