import Invoice from '../models/invoice.model.js';

const getAllInvoices = async () => {
  return await Invoice.findAll();
};

const getInvoiceById = async (invoiceId) => {
  return await Invoice.findByPk(invoiceId);
};

const createInvoice = async (invoiceData) => {
  return await Invoice.create(invoiceData);
};

const updateInvoice = async (invoiceId, updatedData) => {
  const invoice = await Invoice.findByPk(invoiceId);
  if (invoice) {
    await invoice.update(updatedData);
    return invoice;
  }
  return null;
};

const deleteInvoice = async (invoiceId) => {
  const invoice = await Invoice.findByPk(invoiceId);
  if (invoice) {
    await invoice.destroy();
    return invoice;
  }
  return null;
};

export default {
  getAllInvoices,
  getInvoiceById,
  createInvoice,
  updateInvoice,
  deleteInvoice
};