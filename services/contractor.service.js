import Contractor from '../models/contractor.model.js';

const getAllContractors = async () => {
  return await Contractor.findAll();
};

const getContractorById = async (id) => {
  return await Contractor.findByPk(id);
};

const createContractor = async (contractorData) => {
  return await Contractor.create(contractorData);
};

const updateContractor = async (id, contractorData) => {
  const contractor = await Contractor.findByPk(id);
  if (contractor) {
    return await contractor.update(contractorData);
  }
  return null;
};

const deleteContractor = async (id) => {
  const contractor = await Contractor.findByPk(id);
  if (contractor) {
    await contractor.destroy();
    return contractor;
  }
  return null;
};

export default {
  getAllContractors,
  getContractorById,
  createContractor,
  updateContractor,
  deleteContractor,
};