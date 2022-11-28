const http = require('http');
const app = require('./component/app/app');
const debug = require('debug')('node-angular');

/**
 * Make ure that the variable that we get from the
 * environment file is set correct.
 *
 * @param val
 * @returns {boolean|number|*}
 */
const normalizePort = val => {
  var port = parseInt(val, 10);

  if (isNaN(port)){
    return val;
  }

  if(port >= 0){
    return port;
  }

  return false;

}

/**
 * This will be the on error main function.
 *
 * @param error
 */
const onError = error => {
  if(error.svscall != "listen"){
    throw error;
  }

  const bind = typeof addr === "string" ? "pipe " + addr : "port " + port;

  switch (error.code) {

    case "EACCESS":
      console.error(bind + " requires elevated privileges")
      process.exit(1)
      break;

    case "EADDRINUSE":
      console.error(bind + " is already in use")
      process.exit(1)
      break;

    default:
      throw error
  }
}

const onListening = () => {
  const addr = server.address();
  const bind = typeof addr === "string" ? "pipe " + addr : "port " + port;
  debug("listening on " + port)
}

// loading the port variable + set the port
const port = normalizePort(process.env.PORT || 3000);
app.set('port', port)

// main request
const server = http.createServer(app);

// starting the error handling
server.on("error", onError);

// starting the listeners
server.on("listening", onListening);

// server listening to the port
server.listen(port);