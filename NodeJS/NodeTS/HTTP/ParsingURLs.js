"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require('http');
var url = require('url');
var server = http.createServer(function (req, res) {
    var parsedUrl = url.parse(req.url, true);
    var pathname = parsedUrl.pathname;
    var query = parsedUrl.query;
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
        pathname: pathname,
        query: query,
        fullUrl: req.url
    }, null, 2));
});
server.listen(3000);
