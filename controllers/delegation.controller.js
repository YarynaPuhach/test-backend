import delegationService from '../services/delegation.service.js';
import { handleErrors } from '../utils/handleErrors.js';

const getAllDelegations = async (req, res) => {
  try {
    const delegations = await delegationService.getAllDelegations();
    res.json(delegations);
  } catch (error) {
    handleErrors(res, error);
  }
};

const getDelegationById = async (req, res) => {
  try {
    const { delegationId } = req.params;
    const delegation = await delegationService.getDelegationById(delegationId);
    if (delegation) {
      res.json(delegation);
    } else {
      res.status(404).json({ errType: '404', msg: 'Delegation not found' });
    }
  } catch (error) {
    handleErrors(res, error);
  }
};

const createDelegation = async (req, res) => {
  try {
    const delegation = await delegationService.createDelegation(req.body);
    res.status(201).json(delegation);
  } catch (error) {
    handleErrors(res, error);
  }
};

const updateDelegation = async (req, res) => {
  try {
    const { delegationId } = req.params;
    const delegation = await delegationService.updateDelegation(delegationId, req.body);
    if (delegation) {
      res.json(delegation);
    } else {
      res.status(404).json({ errType: '404', msg: 'Delegation not found' });
    }
  } catch (error) {
    handleErrors(res, error);
  }
};

const deleteDelegation = async (req, res) => {
  try {
    const { delegationId } = req.params;
    const delegation = await delegationService.deleteDelegation(delegationId);
    if (delegation) {
      res.json(delegation);
    } else {
      res.status(404).json({ errType: '404', msg: 'Delegation not found' });
    }
  } catch (error) {
    handleErrors(res, error);
  }
};

export default {
  getAllDelegations,
  getDelegationById,
  createDelegation,
  updateDelegation,
  deleteDelegation
};