const { ObjectId } = require("mongodb");
const { contactsCollection } = require("../../db/collections");
const sendError = require("../../lib/sendError");

// this api require the contact _id as a url parameter
// this api will send a single contact which will match the id.

const getSingleContact = async (req, res) => {
  try {
    const { id } = req.params;
    const query = { _id: ObjectId(id) };
    const result = await contactsCollection.findOne(query);
    res.send(result);
  } catch (err) {
    sendError(res, err, "getting a single contact was not successfull");
  }
};

module.exports = getSingleContact;
