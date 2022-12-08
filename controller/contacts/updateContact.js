const { ObjectId } = require("mongodb");
const { contactsCollection } = require("../../db/collections");

const sendError = require("../../lib/sendError");

// this api update a contact based on a id given by url param
// if you don't want to update a property then don't provide that property 
// every property given will be updated.
// with a proper mongodb object id this api will throw an error .

const updateContact = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedContact = req.body;
    const filter = { _id: ObjectId(id) };

    const updatedDoc = {
      $set: updatedContact
    };

    const result = await contactsCollection.updateOne(filter, updatedDoc);
    res.send(result);
  } catch (err) {
    sendError(res, err, "Updating a contact was not successfull");
  }
};

module.exports = updateContact;
