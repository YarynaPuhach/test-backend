import express from 'express';
import employeeController from '../controllers/employee.controller.js';

const employeeRouter = express.Router();

employeeRouter.get('/', employeeController.getAllEmployees);
employeeRouter.get('/:employeeId', employeeController.getEmployeeById);
employeeRouter.post('/', employeeController.createEmployee);
employeeRouter.put('/:employeeId', employeeController.updateEmployee);
employeeRouter.delete('/:employeeId', employeeController.deleteEmployee);

export default employeeRouter;