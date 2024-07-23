import { Router } from 'express';
import {
  getAllContractors,
  getContractorById,
  createContractor,
  updateContractor,
  deleteContractor,
} from '../controllers/contractor.controller.js';

const router = Router();

router.get('/', getAllContractors);
router.get('/:id', getContractorById);
router.post('/', createContractor);
router.put('/:id', updateContractor);
router.delete('/:id', deleteContractor);

export default router;