import Delegation from '../models/delegation.model.js';

const getAllDelegations = async () => {
  return await Delegation.findAll();
};

const getDelegationById = async (delegationId) => {
  return await Delegation.findByPk(delegationId);
};

const createDelegation = async (delegationData) => {
  return await Delegation.create(delegationData);
};

const updateDelegation = async (delegationId, updatedData) => {
  const delegation = await Delegation.findByPk(delegationId);
  if (delegation) {
    await delegation.update(updatedData);
    return delegation;
  }
  return null;
};

const deleteDelegation = async (delegationId) => {
  const delegation = await Delegation.findByPk(delegationId);
  if (delegation) {
    await delegation.destroy();
    return delegation;
  }
  return null;
};

export default {
  getAllDelegations,
  getDelegationById,
  createDelegation,
  updateDelegation,
  deleteDelegation
};