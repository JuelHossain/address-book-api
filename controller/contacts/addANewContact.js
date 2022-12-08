// this api adds a contact on the contact collection
// whatever in the req body will be inserted in the contact collection.

const { contactsCollection } = require("../../db/collections");
const sendError = require("../../lib/sendError");

const addANewContact = async (req, res) => {
  try {
    const newContact = req.body;
    const result = await contactsCollection.insertOne(newContact);
    res.send(result);
  } catch (err) {
    sendError(res, err, "adding a  contact  was not successfull");
  }
};

module.exports = addANewContact;
