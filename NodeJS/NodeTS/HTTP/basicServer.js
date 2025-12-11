"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require('http');
var server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, World\n');
});
server.listen(3000, 'localhost', function () {
    console.log('Server running at http://localhost:3000/');
});
