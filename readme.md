## Address Book Api.

default url: https://address-book-api.vercel.app/

### Api List

##### /auth

1. POST
   - This api expect user information as an object in the body of the request.
   - it will give you a unique jwt token for 1d
   - with the jwt token you will be access the api.
   - you have to send the token in every request header as {authorization:"Bearer Token"}

##### /contacts

1. GET

   - this is the api where you can get all the contacts
   - you can pass query string as well whatever query you like.
   - you can get contacts with pagination by providing page and size query;
   - if you don't pass any query then this api will send all the contacts available

2. POST
   - this api adds a contact on the contact collection
   - this api require an object in the request body containing the data of the contact

##### /contacts/bulk

1. POST
   - this api adds many contacts on the contact collection at once
   - this api require an Array in the request body containing the contacts information

##### /contacts/count

1. GET
   - this api will provide you the count of the available contacts in the db.

##### /contacts/:id

1. GET
   - this api require the contact \_id as a url parameter
   - this api will send a single contact which will match the id.
   - without a proper mongodb object id this api will throw an error .
2. PATCH
   - this api update a contact based on a id given by url param
   - if you don't want to update a property then don't provide that property
   - every property given will be updated.
   - without a proper mongodb object id this api will throw an error .
3. DELETE
   - this api will delete a contact by id given in the url parameter
   - without a proper mongodb object id this api will throw an error .

> NB: all endpoints besides auth is protected by jwt. if you want to access the api you must first generate a token by sending request to /auth url method will be post and you should be add user information in the body of the request. in response you will get access token and you have to send this access token like this {authorization:"Bearer Token"} in every request header. otherwise an error will be shown that access:unauthorized;

#### Technologies used

1. Express Js
2. mongoDB
3. Json Web Token
4. cors
5. dotenv
6. eslint
7. prettier

Thank you.
