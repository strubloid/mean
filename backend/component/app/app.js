const express = require('express')
const bodyParser = require('body-parser')
const PostModel = require("./models/post")
const mongoose = require("mongoose")
const PostRoute = require("./routes/PostRoute")
const app = express();

try
{

  // connection information
  const connection = {
    username : 'root',
    password : 'root',
    dbSchema : 'node-angular',
    server : 'node-api.lpzyuis.mongodb.net'
  }

  const connectionUrl =`mongodb+srv://${connection.username}:${connection.password}@${connection.server}/${connection.dbSchema}?retryWrites=true&w=majority`;

  // this is the connection of the mongoose
  mongoose.connect(connectionUrl)
    .then(() => { console.log('connected to mongo db') })
    .catch(() => { console.log('Not Connected to MongoDB') });

  // this will parse the body as json
  app.use(bodyParser.json());

  // starting the post routes
  new PostRoute(app);

} catch (error) {
  console.error(error);
}

module.exports = app