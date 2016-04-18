const http = require('http');
const Router = require(__dirname + '/router.js');

var slothbear = module.exports = exports = {};

slothbear.start = function(port) {
  slothbear.server = http.createServer(this.router.route()).listen(port, () => {
  console.log('Server up on port ' + port);
  slothbear.close = function() {
    slothbear.server.close();
  };
  return slothbear.server;
  });
};

slothbear.router = new Router();
