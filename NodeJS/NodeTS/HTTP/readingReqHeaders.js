"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require('http');
var server = http.createServer(function (req, res) {
    console.log('Request headers: ', req.headers);
    var userAgent = req.headers['user-agent'];
    var acceptLanguage = req.headers['accept-language'];
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end("User-Agent: ".concat(userAgent, "\nAccept-Language: ").concat(acceptLanguage));
});
server.listen(3000);
