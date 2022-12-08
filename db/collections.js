const client = require("./client");

const db = client.db("address-book");
module.exports = {
  contactsCollection: db.collection("contacts")
};
