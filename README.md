# REST-API-in-Express-MongoDb

A basic REST API in Express and MongoDB

It implements GET, POST, DELETE, PATCH methods. 

A `users` collection is created using mongoose with attributes `name`, `followedChannels` and 
`registeredDate`. 


The REST API works on this `users` collection and performs CRUD operations on it. The operations are performed using the following functions of mongoose library. 

- `Document.prototype.save()`
- `Model.find()`
- `Model.findById()`
- `Model.prototype.deleteOne()`

**GET request**

<img src="screenshots\getRequest.JPG">

#### Learning Resources

- CRUD Operations with Mongoose and MongoDB Atlas https://www.digitalocean.com/community/tutorials/nodejs-crud-operations-mongoose-mongodb-atlas
- HTTP methods https://restfulapi.net/http-methods/
- ROuting https://www.digitalocean.com/community/tutorials/nodejs-express-routing
- https://expressjs.com/en/5x/api.html#router
-  Mongoose Docs https://mongoosejs.com/docs/search.html
-  https://stackoverflow.com/questions/23259168/what-are-express-json-and-express-urlencoded/51844327
-  https://www.geeksforgeeks.org/express-js-express-json-function/