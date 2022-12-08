// this api adds a contact on the contact collection
// this api require an object in the request body containing the data of the contact

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
