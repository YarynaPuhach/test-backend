import employeeService from '../services/employee.service.js';
import { handleErrors } from '../utils/handleErrors.js';

const getAllEmployees = async (req, res) => {
  try {
    const employees = await employeeService.getAllEmployees();
    res.json(employees);
  } catch (error) {
    handleErrors(res, error);
  }
};

const getEmployeeById = async (req, res) => {
  try {
    const { employeeId } = req.params;
    const employee = await employeeService.getEmployeeById(employeeId);
    if (employee) {
      res.json(employee);
    } else {
      res.status(404).json({ errType: '404', msg: 'Employee not found' });
    }
  } catch (error) {
    handleErrors(res, error);
  }
};

const createEmployee = async (req, res) => {
  try {
    const employee = await employeeService.createEmployee(req.body);
    res.status(201).json(employee);
  } catch (error) {
    handleErrors(res, error);
  }
};

const updateEmployee = async (req, res) => {
  try {
    const { employeeId } = req.params;
    const employee = await employeeService.updateEmployee(employeeId, req.body);
    if (employee) {
      res.json(employee);
    } else {
      res.status(404).json({ errType: '404', msg: 'Employee not found' });
    }
  } catch (error) {
    handleErrors(res, error);
  }
};

const deleteEmployee = async (req, res) => {
  try {
    const { employeeId } = req.params;
    const employee = await employeeService.deleteEmployee(employeeId);
    if (employee) {
      res.json(employee);
    } else {
      res.status(404).json({ errType: '404', msg: 'Employee not found' });
    }
  } catch (error) {
    handleErrors(res, error);
  }
};

export default {
  getAllEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployee,
  deleteEmployee
};