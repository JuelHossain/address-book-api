const { ObjectId } = require("mongodb");
const { contactsCollection } = require("../../db/collections");
const sendError = require("../../lib/sendError");

// this api delete a contact by id given in the url parameter
// with a proper mongodb object id this api will throw an error .

const deleteContact = async (req, res) => {
  try {
    const { id } = req.params;
    const query = { _id: ObjectId(id) };
    const result = await contactsCollection.deleteOne(query);
    res.send(result);
  } catch (err) {
    sendError(res, err, "deleting a single contact was not successfull");
  }
};

module.exports = deleteContact;
