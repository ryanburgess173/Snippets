"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require('http');
var fs = require('fs');
var path = require('path');
var server = http.createServer(function (req, res) {
    var filePath = path.join(__dirname, req.url);
    fs.access(filePath, fs.constants.F_OK, function (err) {
        if (err) {
            res.statusCode = 404;
            res.end('File not found');
            return;
        }
        fs.stat(filePath, function (err, stats) {
            if (err) {
                res.statusCode = 500;
                res.end('Server error');
                return;
            }
            res.setHeader('Content-Length', stats.size);
            res.setHeader('Content-Type', 'application/octet-stream');
            var stream = fs.createReadStream(filePath);
            stream.on('error', function (error) {
                console.error('Error reading file:', err);
                if (!res.headersSent) {
                    res.statusCode = 500;
                    res.end('Error reading file');
                }
            });
            stream.pipe(res);
        });
    });
});
var PORT = 3000;
server.listen(PORT, function () {
    console.log("File server running at http://localhost:".concat(PORT, "/"));
});
