const express = require('express')
const bodyParser = require('body-parser')
const PostModel = require("./models/post")
const mongoose = require("mongoose")
const PostRoute = require("./routes/PostRoute")
const app = express();

try
{

  // Localhost setup
  const MONGO_DB_URI = process.env.MONGODB_URI || 'mongodb://mongo_db:27017';
  const DB_NAME = process.env.DB_NAME || 'backend_database';
  const DB_USER = process.env.DB_USER || 'root';
  const DB_PASSWORD = process.env.DB_PASSWORD || 'root';

  // This is how to connect to a server outside of it
  // const connection = { username : 'root',password : 'root', dbSchema : 'node-angular', server : 'node-api.lpzyuis.mongodb.net' };
  // const connectionUrl =`mongodb+srv://${connection.username}:${connection.password}@${connection.server}/${connection.dbSchema}?retryWrites=true&w=majority`;

  // This is for localhost mongodb
  const options = { user: DB_USER, pass: DB_PASSWORD, useNewUrlParser: true, useUnifiedTopology: true }
  mongoose.connect(MONGO_DB_URI, options);

  //Get the default connection
  let db = mongoose.connection;

  // message in case of being well connected to the database
  db.on('connected',  (ref) => {
    console.log('connected to mongo server.');
  });

  db.on('error', (err) => {
    console.log(err);
  });

  // this will parse the body as json
  app.use(bodyParser.json());

  // starting the post routes
  let postRoute = new PostRoute();

  // registering the route object, so we can get all configurations
  app.use(postRoute.router)

} catch (error) {
  console.error(error);
}

module.exports = app