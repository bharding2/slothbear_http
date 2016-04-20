## Slothbear HTTP
An HTTP server framework for node.js built to handle http server creation and routing functionality.

### Contents
* Getting Started
* API
  * Server
  * Router
* Dependencies
* Authors
* License

### Getting Started
* Install locally to a project by running ` npm install slothbear_http `
* Import the module into your project by using the following structure: ` var slothbear = require('slothbear_http'); `.  The slothbear variable can be defined using any name you choose, but for the following examples we will use the name slothbear.
* Here is a quick example on how you would get a server started on port 3000 with ` GET ` and ` POST ` routes:
```
const slothbear = require('slothbear_http');

slothbear.router.get('/', (request, response) => {
  response.write('Hello World');
  response.end();
});
slothbear.router.post('/slothbear', (request, response) => {
  response.write('Successfully posted to /slothbear');
  response.end();
});

slothbear.server(3000);
```

### API

### Server
#### slothbear.server(port)
To launch your server, use the ` slothbear.server ` method.  This method takes the port you want to listen on as a variable, and launches your server when run.  For example, ` slothbear.server(3000); ` would launch a server that listens for incoming requests on port 3000.

### Router
#### slothbear.router
To set up the routing for your server, use the built in ` slothbear.router `.  The router is already internally linked to the ` slothbear.server ` method, so all you need to do is add your routes directly to the ` slothbear.router ` property.  For example, a simple get request to the "/slothbear" route can be set up like so: ` slothbear.router.get('/slothbear', callback); `.  Further routes can also be added directly to the ` slothbear.router `, or chained together:  
```
slothbear.router.get('/', (request, response) => {
    some GET logic
  })
  .get('/sloth', (request, response) => {
    some other GET logic for /sloth route
  })
  .post('/bear', (request, response) => {
    some POST logic for the /bear route
  });
```

#### Routing using REST verbs
##### slothbear.router.get(path, callback(req, res))
Adds a ```GET``` route that handles requests with the passed-in callback. Returns the router to allow for method chaining. Example:
```
slothbear.router.get('/index', (req, res) => {
  res.write('Hello World');
  res.end();
});
```

##### slothbear.router.post(path, callback(req, res))
Adds a ```POST``` route that handles requests with the passed-in callback. Return the router to allow for method chaining. Example:
```
slothbear.router.post('/index', (req, res) => {
  req.on('data', (data) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(data);
    res.end();
  });
});
```

##### slothbear.router.put(path, callback(req, res))
Adds a ```PUT``` route that handles requests with the passed-in callback. Return the router to allow for method chaining.
##### slothbear.router.patch(path, callback(req, res))
Adds a ```PATCH``` route that handles requests with the passed-in callback. Return the router to allow for method chaining.
##### slothbear.router.delete(path, callback(req, res))
Adds a ```DELETE``` route that handles requests with the passed-in callback. Return the router to allow for method chaining.

### Dependencies
* Testing done using [Mocha](https://github.com/mochajs/mocha) and [Chai](https://github.com/chaijs/chai) with the [Chai-http](https://github.com/chaijs/chai-http) assertion library
* Task management done using [gulp](https://github.com/gulpjs/gulp)
* Routing functionality leans very heavily on a Router constructor function built by Tyler Morgan for the CodeFellows 401d7 advanced javascript class.

### Authors
This module was built by:
* [Phillip Nguyen](https://github.com/philmein23)
* [Greg Magdsick](https://github.com/gregmagdsick)
* [Ben Harding](https://github.com/bharding2)

### License
* This software was built under the [MIT](https://opensource.org/licenses/MIT) open-source license
