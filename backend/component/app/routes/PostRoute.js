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

      // allowing the main type of requests
      res.setHeader(
        'Access-Control-Allow-Methods',
        'GET, POST, PATCH, PUT, DELETE, OPTIONS'
      )

      // continues to the other requests
      next();
    });
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
      post.save().then(createdPost => {
        // everything is ok, and it is added a new resource code
        res.status(201).json({
          message: 'Added Successfully',
          lastAddedPostID: createdPost._id
        });
      });

    });

    // route to edit a post
    app.put('/api/posts/:id', (req, res, next) => {

      // let updateId : String = req.body.id;
      let updateId  = req.params.id;

      // const post = req.body
      const post = new PostModel({
        _id: updateId,
        title: req.body.title,
        content: req.body.content,
      });

      const filter = { _id: req.params.id };

      // saving into the database
      PostModel.updateOne(filter, post).then(result => {
        res.status(200).json({
          message: 'Update Successfully',
        });
      });

    });

    // this will load a single post by the id
    app.get('/api/posts/:id', (req, res, next) => {
      PostModel.findById(req.params.id)
        .then(post => {
          if (post) {
            res.status(200).json(post);
          } else {
            res.status(404).json({ message: 'Post not found! ' });
          }
        });
    });

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

    // route to delete a post
    app.delete('/api/posts/:id', (req, res, next) => {
      const idToDelete = req.params.id

      // remind that on mongodb the id is _id
      PostModel.deleteOne({ _id: idToDelete })
        .then((result) => {
          console.log(result)
          res.status(200).json({
            message: `Post Deleted: ${req.params.id}`,
          });
        });
    });
  }
}

module.exports = PostRoute