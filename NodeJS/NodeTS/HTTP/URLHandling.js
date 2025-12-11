"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require('http');
var server = http.createServer(function (req, res) {
    var url = req.url, method = req.method;
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end("You made a ".concat(method, " request to ").concat(url));
});
server.listen(3000, function () {
    console.log('Server running at localhost:3000');
});
