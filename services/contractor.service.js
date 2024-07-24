import Contractor from '../models/contractor.model.js';

const getAllContractors = async () => {
  return await Contractor.findAll({ where: { deleted: false } });
};

const getContractorById = async (id) => {
  return await Contractor.findOne({ where: { id, deleted: false } });
};

const createContractor = async (contractorData) => {
  return await Contractor.create(contractorData);
};

const updateContractor = async (id, contractorData) => {
  const contractor = await Contractor.findByPk(id);
  if (contractor && !contractor.deleted) {
    return await contractor.update(contractorData);
  }
  return null;
};

const deleteContractor = async (id) => {
  const contractor = await Contractor.findByPk(id);
  if (contractor && !contractor.deleted) {
    await contractor.update({ deleted: true });
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