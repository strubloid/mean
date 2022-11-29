const mongoose = require('mongoose')

// creating the schema (The blueprint of the object)
const postSchema = mongoose.Schema({
  title : {
    type : String,
    required : true,
  },
  content : {
    type : String,
    required : true
  }
});

// setting the model PostModel the blueprint postSchema
module.exports = mongoose.model('PostModel', postSchema);