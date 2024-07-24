import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import contractorRoutes from './routes/contractor.routes.js';
import employeeRoutes from './routes/employee.routes.js';
import invoiceRoutes from './routes/invoice.routes.js';
import delegationRoutes from './routes/delegation.routes.js';
import { sequelize, syncModels } from './models/index.js';

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/contractors', contractorRoutes);
app.use('/api/employees', employeeRoutes);
app.use('/api/invoices', invoiceRoutes);
app.use('/api/delegations', delegationRoutes);

syncModels().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}).catch((error) => {
  console.error('Unable to connect to the database:', error);
});