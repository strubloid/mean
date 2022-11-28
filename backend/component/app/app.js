const express = require('express')

const app = express()

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