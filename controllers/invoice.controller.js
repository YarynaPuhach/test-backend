
import invoiceService from '../services/invoice.service.js';
import { handleErrors } from '../utils/handleErrors.js';

const getAllInvoices = async (req, res) => {
  try {
    const invoices = await invoiceService.getAllInvoices();
    res.json(invoices);
  } catch (error) {
    handleErrors(res, error);
  }
};

const getInvoiceById = async (req, res) => {
  try {
    const { invoiceId } = req.params;
    const invoice = await invoiceService.getInvoiceById(invoiceId);
    if (invoice) {
      res.json(invoice);
    } else {
      res.status(404).json({ errType: '404', msg: 'Invoice not found' });
    }
  } catch (error) {
    handleErrors(res, error);
  }
};

const createInvoice = async (req, res) => {
  try {
    const invoice = await invoiceService.createInvoice(req.body);
    res.status(201).json(invoice);
  } catch (error) {
    handleErrors(res, error);
  }
};

const updateInvoice = async (req, res) => {
  try {
    const { invoiceId } = req.params;
    const invoice = await invoiceService.updateInvoice(invoiceId, req.body);
    if (invoice) {
      res.json(invoice);
    } else {
      res.status(404).json({ errType: '404', msg: 'Invoice not found' });
    }
  } catch (error) {
    handleErrors(res, error);
  }
};

const deleteInvoice = async (req, res) => {
  try {
    const { invoiceId } = req.params;
    const invoice = await invoiceService.deleteInvoice(invoiceId);
    if (invoice) {
      res.json(invoice);
    } else {
      res.status(404).json({ errType: '404', msg: 'Invoice not found' });
    }
  } catch (error) {
    handleErrors(res, error);
  }
};

export default {
  getAllInvoices,
  getInvoiceById,
  createInvoice,
  updateInvoice,
  deleteInvoice
};