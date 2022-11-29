const PostModel = require('../models/post')

class PostRoute {

  constructor (app) {

    // this will be fixing the issue of accessing from another domain/port
    this.configBrowser(app)

    // this will start the routes for the post component
    this.postRoutes(app)
  }

  /**
   * This will be responsible to configure the browser.
   */
  configBrowser (app) {
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
  }

  /**
   * This will return all post routes
   */
  postRoutes (app) {

    // route to set a new post
    app.post('/api/posts', (req, res, next) => {

      // const post = req.body
      const post = new PostModel({
        title: req.body.title,
        content: req.body.content,
      })

      // saving into the database
      post.save()

      // everything is ok, and it is added a new resource code
      res.status(201).json({
        message: 'Added Successfully',
        post: post
      })

    })

    // route to get the posts
    app.get('/api/posts', (req, res, next) => {

      // loading all results from the post model
      PostModel.find()
        .then((documents) => {
          const posts = documents
          res.status(200).json({
            message: 'success',
            posts: posts
          });
        });
    })
  }
}

module.exports = PostRoute