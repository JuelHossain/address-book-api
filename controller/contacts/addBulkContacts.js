// this api adds many contacts on the contact collection
// this api require an Array in the request body containing the contacts information

const { contactsCollection } = require("../../db/collections");
const sendError = require("../../lib/sendError");

const addBulkContacts = async (req, res) => {
  try {
    const bulkContacts = req.body;
    const result = await contactsCollection.insertMany(bulkContacts);
    res.send(result);
  } catch (err) {
    sendError(res, err, "adding bulk contacts  was not successfull");
  }
};

module.exports = addBulkContacts;
