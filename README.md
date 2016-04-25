# api-ai-node-js
Fork of Original Node.js SDK for Api.ai, for making api.ai requests

Plugin makes it easy to integrate your Node.js application with [api.ai](http://api.ai) natural language processing service.

* [Installation](#installation)
* [Usage](#usage)

# Installation

* Make sure that [Node.js](https://nodejs.org/) installed.
* Install Node.js library with `npm`:
```shell
npm install apiai-nodejs-co
```

# Usage
* Create `main.js` file. Insert into following code.
```javascript
var apiai = require('apiai-nodejs-co');

var options = {
    hostname: "api.api.ai",
    port: 443,
    path: "/v1/query",
    version: "20150910"
}
var app = apiai("<your client acces token>", "<your client subscribtion key>" options);

var reqOptions = {
	lang: "en",
	timezone: "<eg Africa/Lagos>",
	sessionId: "<sessionId here>"
}
var request = app.textRequest('<Your text query>' reqOptions);

request.on('response', function(response) {
    console.log(response);
});

request.on('error', function(error) {
    console.log(error);
});

request.end()
```
* Run following command.
```shell
node main.js