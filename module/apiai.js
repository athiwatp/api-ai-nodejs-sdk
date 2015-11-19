/*!
 * apiai
 * Copyright(c) 2015 http://api.ai/
 * MIT Licensed
 */

'use strict';

var util = require('util');


var TextRequest = require('./text_request').TextRequest;
var VoiceRequest = require('./voice_request').VoiceRequest;

var language = 'en'
var hostname = 'api.api.ai'
var port = 443
var path = '/v1/query'
var version = '20150910'
var timezone = 'Africa/Lagos'

function createApplication(clientAccessToken, subscriptionKey, options) {
    var options = options || {};

    if (!clientAccessToken) {
        throw new Error('\'clientAccessToken\' cannot be empty.');
    }

    if (!subscriptionKey) {
        throw new Error('\'subscriptionKey\' cannot be empty.');
    }

    return new Application(clientAccessToken, subscriptionKey, options);
}

exports = module.exports = createApplication;

function Application (clientAccessToken, subscriptionKey, options) {
    var self = this;
    self.clientAccessToken = clientAccessToken;
    self.subscriptionKey = subscriptionKey;

    self.language = options.language || language;
    self.hostname = options.hostname || hostname;
    self.port = options.port || port;
    self.path = options.path || path;
    self.version = options.version || version;
    self.timezone = options.timezone || timezone;
};

Application.prototype.textRequest = function(query, options) {
    var self = this;
    var opt = options || {};

    return new TextRequest(self, query, opt);
};

Application.prototype.voiceRequest = function(options) {
    var self = this;
    var opt = options || {};

    return new VoiceRequest(self, opt);
};


