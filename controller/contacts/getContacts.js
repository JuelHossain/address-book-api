const { contactsCollection } = require("../../db/collections");
const sendError = require("../../lib/sendError");

// this is the api where you can get all the contacts
// you can pass querystring as well whatever query you like.
// you can get contacts with pagination by providing page and size query;
// if you don't pass any query then this api will send all the contacts available

const getContacts = async (req, res) => {
  try {
    const page = parseInt(req.query.page, 10);
    const size = parseInt(req.query.size, 10);

    const queryReducer = (prev, key) => {
      const value = req.query[key];
      if (key === "page" || key === "size") return prev;
      return { ...prev, [key]: value === "true" ? true : value === "false" ? false : value };
    };

    const initialQuery = {};

    const query = Object.keys(req.query).reduce(queryReducer, initialQuery);

    const cursor = contactsCollection.aggregate([{ $match: query }, { $sort: { createdAt: -1 } }]);

    let contacts;

    if (page || size) {
      contacts = await cursor
        .skip(page * size)
        .limit(size)
        .toArray();
    } else {
      contacts = await cursor.toArray();
    }

    res.send(contacts);
  } catch (err) {
    sendError(res, err, "getting contacts was not successfull");
  }
};

module.exports = getContacts;
