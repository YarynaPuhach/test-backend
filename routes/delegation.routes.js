import express from 'express';
import delegationController from '../controllers/delegation.controller.js';

const delegationRouter = express.Router();

delegationRouter.get('/', delegationController.getAllDelegations);
delegationRouter.get('/:delegationId', delegationController.getDelegationById);
delegationRouter.post('/', delegationController.createDelegation);
delegationRouter.put('/:delegationId', delegationController.updateDelegation);
delegationRouter.delete('/:delegationId', delegationController.deleteDelegation);

export default delegationRouter;