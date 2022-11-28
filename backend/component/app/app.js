const express = require('express');

const app = express();

app.use((req,res, next) => {

  // setting to any kind of domain
  res.setHeader('Access-Control-Allow-Origin', "*");

  // allowing some headers
  res.setHeader(
    'Access-Control-Allow-Header',
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  // alowing the main type of requests
  res.setHeader(
    'Access-Control-Allow-Methods',
    "GET, POST, PATCH, DELETE, OPTIONS"
  );

  // continues to the other requests
  next();
});

app.use('/api/posts', (req, res, next) => {

  const posts = [{
    id: 1,
    title: 'first post',
    content: 'coming form the server 1',
  },{
      id: 2,
      title: 'second post',
      content: 'coming form the server 2',
    }
  ]

  res.status(200).json({
    message : 'success',
    posts: posts
  });

})

module.exports = app