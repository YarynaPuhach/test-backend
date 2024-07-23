import Employee from '../models/employee.model.js';

const getAllEmployees = async () => {
  return await Employee.findAll();
};

const getEmployeeById = async (employeeId) => {
  return await Employee.findByPk(employeeId);
};

const createEmployee = async (employeeData) => {
  return await Employee.create(employeeData);
};

const updateEmployee = async (employeeId, updatedData) => {
  const employee = await Employee.findByPk(employeeId);
  if (employee) {
    await employee.update(updatedData);
    return employee;
  }
  return null;
};

const deleteEmployee = async (employeeId) => {
  const employee = await Employee.findByPk(employeeId);
  if (employee) {
    await employee.destroy();
    return employee;
  }
  return null;
};

export default {
  getAllEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployee,
  deleteEmployee
};