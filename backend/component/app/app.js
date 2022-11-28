const express = require('express')
const bodyParser = require('body-parser')

const app = express()

// this will parse the body as json
app.use(bodyParser.json())

app.use((req, res, next) => {

  // setting to any kind of domain
  res.setHeader('Access-Control-Allow-Origin', '*')

  // allowing some headers
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )

  // alowing the main type of requests
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, DELETE, OPTIONS'
  )

  // continues to the other requests
  next()
})

// route to set a new post
app.post('/api/posts', (req, res, next) => {

  const post = req.body

  console.log(post)

  // everything is ok, and it is added a new resource code
  res.status(201).json({
    message: 'Added Successfully',
    message: post
  })

})

// route to get the posts
app.get('/api/posts', (req, res, next) => {

  const posts = [{
    id: 1,
    title: 'first post',
    content: 'coming form the server 1',
  }, {
    id: 2,
    title: 'second post',
    content: 'coming form the server 2',
  }
  ]

  res.status(200).json({
    message: 'success',
    posts: posts
  })

})

module.exports = app