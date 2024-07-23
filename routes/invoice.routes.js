import express from 'express';
import invoiceController from '../controllers/invoice.controller.js';

const invoiceRouter = express.Router();

invoiceRouter.get('/', invoiceController.getAllInvoices);
invoiceRouter.get('/:invoiceId', invoiceController.getInvoiceById);
invoiceRouter.post('/', invoiceController.createInvoice);
invoiceRouter.put('/:invoiceId', invoiceController.updateInvoice);
invoiceRouter.delete('/:invoiceId', invoiceController.deleteInvoice);

export default invoiceRouter;