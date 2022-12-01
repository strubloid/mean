const express = require('express')
const bodyParser = require('body-parser')
const PostModel = require("./models/post")
const mongoose = require("mongoose")
const PostRoute = require("./routes/PostRoute")
const app = express();

try
{

  // Localhost setup
  const LOCALHOST = 'mongo_db';
  const DB_PORT = process.env.DB_PORT || '27017';
  const DB_NAME = process.env.DB_NAME || 'backend_database';
  const DB_USER = process.env.DB_USER || 'admin';
  const DB_PASSWORD = process.env.DB_PASSWORD || 'admin';
  const connectionURI = `mongodb://${DB_USER}:${DB_PASSWORD}@${LOCALHOST}:${DB_PORT}/${DB_NAME}`

  mongoose.connect(connectionURI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  );



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