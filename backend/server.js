const http = require('http');
const app = require('./component/app/app');
const port = process.env.PORT || 3000;

// main request
app.set('port', port)
const server = http.createServer(app);

server.listen(port);