const { contactsCollection } = require("../../db/collections");
const sendError = require("../../lib/sendError");

// this api will provide you the count of the available contacts in the db.

const getContactCount = async (req, res) => {
  try {
    const count = await contactsCollection.countDocuments();
    res.send({ count });
  } catch (err) {
    sendError(res, err, "getting contact count was not successfull");
  }
};

module.exports = getContactCount;
