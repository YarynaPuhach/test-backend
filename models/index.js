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

// Read the configuration file
const env = process.env.NODE_ENV || 'development';
const configPath = path.join(__dirname, '..', 'config', 'config.json');
const config = JSON.parse(fs.readFileSync(configPath, 'utf8'))[env];

// Setup Sequelize
let sequelize;
if (process.env.DATABASE_URL) {
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    },
    logging: false // Disable logging of SQL queries
  });
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: config.dialect,
    dialectOptions: config.dialectOptions,
    logging: false // Disable logging of SQL queries
  });
}

// Initialize models
ContractorMap(sequelize);
EmployeeMap(sequelize);
InvoiceMap(sequelize);
DelegationMap(sequelize);

// Sync models
const syncModels = async () => {
  try {
    await sequelize.sync({ alter: true }); // or { force: true } for development only
    console.log('Database synced');
  } catch (error) {
    console.error('Unable to sync the database:', error);
  }
};

export { sequelize, syncModels };