const addANewContact = require("./addANewContact");
const addBulkContacts = require("./addBulkContacts");
const deleteContact = require("./deleteContact");
const getContactCount = require("./getContactCount");
const getContacts = require("./getContacts");
const getSingleContact = require("./getSingleContact");
const updateContact = require("./updateContact");

module.exports = {
  addANewContact,
  addBulkContacts,
  getSingleContact,
  getContacts,
  getContactCount,
  updateContact,
  deleteContact
};
