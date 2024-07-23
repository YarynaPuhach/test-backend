import { Sequelize } from 'sequelize';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs';
import path from 'path';
import { ContractorMap } from './contractor.model.js';
import { EmployeeMap } from './employee.model.js';
import { InvoiceMap } from './invoice.model.js';
import { DelegationMap } from './delegation.model.js';

// Derive __dirname using import.meta.url
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Зчитування конфігураційного файлу
const env = process.env.NODE_ENV || 'development';
const configPath = path.join(__dirname, '..', 'config', 'config.json');
const config = JSON.parse(fs.readFileSync(configPath, 'utf8'))[env];

// Налаштування Sequelize
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

export { sequelize };