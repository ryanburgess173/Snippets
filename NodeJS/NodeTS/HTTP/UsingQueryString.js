"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require('http');
var URL = require('url').URL;
var querystring = require('querystring');
var server = http.createServer(function (req, res) {
    var baseURL = 'http://' + req.headers.host + '/';
    var parsedUrl = new URL(req.url, baseURL);
    var params = Object.fromEntries(parsedUrl.searchParams);
    var queryObj = {
        name: 'Ryan B',
        age: 27,
        interests: ['programming', 'legos', 'racing', 'photography', 'camping', 'hiking', 'reading', 'comics', 'guitar']
    };
    var queryStr = querystring.stringify(queryObj);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
        path: parsedUrl.pathname,
        params: params,
        exampleQueryString: queryStr
    }, null, 2));
});
server.listen(3000);
