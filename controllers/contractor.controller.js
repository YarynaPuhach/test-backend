import contractorService from '../services/contractor.service.js';
import { handleErrors } from '../utils/handleErrors.js';

export const getAllContractors = async (req, res) => {
  try {
    const contractors = await contractorService.getAllContractors();
    res.json(contractors);
  } catch (error) {
    handleErrors(res, error);
  }
};

export const getContractorById = async (req, res) => {
  try {
    const { id } = req.params;
    const contractor = await contractorService.getContractorById(id);
    if (contractor) {
      res.json(contractor);
    } else {
      res.status(404).json({ error: 'Contractor not found' });
    }
  } catch (error) {
    handleErrors(res, error);
  }
};

export const createContractor = async (req, res) => {
  try {
    const contractor = await contractorService.createContractor(req.body);
    res.status(201).json(contractor);
  } catch (error) {
    handleErrors(res, error);
  }
};

export const updateContractor = async (req, res) => {
  try {
    const { id } = req.params;
    const contractor = await contractorService.updateContractor(id, req.body);
    if (contractor) {
      res.json(contractor);
    } else {
      res.status(404).json({ error: 'Contractor not found' });
    }
  } catch (error) {
    handleErrors(res, error);
  }
};

export const deleteContractor = async (req, res) => {
  try {
    const { id } = req.params;
    const contractor = await contractorService.deleteContractor(id);
    if (contractor) {
      res.json(contractor);
    } else {
      res.status(404).json({ error: 'Contractor not found' });
    }
  } catch (error) {
    handleErrors(res, error);
  }
};