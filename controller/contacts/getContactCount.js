const { contactsCollection } = require("../../db/collections");
const sendError = require("../../lib/sendError");

const getContactCount = async (req, res) => {
  try {
    const count = await contactsCollection.countDocuments();
    res.send(count);
  } catch (err) {
    sendError(res, err, "getting contact count was not successfull");
  }
};

module.exports = getContactCount;
