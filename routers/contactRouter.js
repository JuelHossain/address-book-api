const express = require("express");
const {
  addANewContact,
  addBulkContacts,
  getSingleContact,
  getContacts,
  getContactCount,
  updateContact,
  deleteContact
} = require("../controller/contacts");
const verifyJwt = require("../middlewares/verifyJwt");

const contactRouter = express.Router();
contactRouter.use(verifyJwt);
// get contacts and add contact
contactRouter.route("/").get(getContacts).post(addANewContact);

// add bulk contacts by providing array of contacts
contactRouter.route("/bulk").post(addBulkContacts);

// get contacts count for pagination purpose.
contactRouter.route("/count").get(getContactCount);

// dynamic route by mongodb object id.
// get single contact , update single contact  and delete single contact
contactRouter.route("/:id").get(getSingleContact).patch(updateContact).delete(deleteContact);

module.exports = contactRouter;
