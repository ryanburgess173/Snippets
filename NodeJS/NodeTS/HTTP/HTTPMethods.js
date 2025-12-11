"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var http = require('http');
var URL = require('url').URL;
var todos = [
    { id: 1, task: 'Learn Node.js', completed: false },
    { id: 2, task: 'Build an API', completed: false }
];
var server = http.createServer(function (req, res) {
    var method = req.method, url = req.url;
    var parsedUrl = new URL(url, "http://".concat(req.headers.host));
    var pathname = parsedUrl.pathname;
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    if (method === 'OPTIONS') {
        res.writeHead(204);
        res.end();
        return;
    }
    if (method === 'GET' && pathname === '/todos') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(todos));
    }
    else if (method === 'POST' && pathname === '/todos') {
        var body_1 = '';
        req.on('data', function (chunk) {
            body_1 += chunk.toString();
        });
        req.on('end', function () {
            try {
                var newTodo = JSON.parse(body_1);
                newTodo.id = todos.length > 0 ? Math.max.apply(Math, todos.map(function (t) { return t.id; })) + 1 : 1;
                todos.push(newTodo);
                res.writeHead(201, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(newTodo));
            }
            catch (error) {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Invalid JSON' }));
            }
        });
    }
    else if (method === 'PUT' && pathname.startsWith('/todos/')) {
        var id_1 = parseInt(pathname.split('/')[2]);
        var body_2 = '';
        req.on('data', function (chunk) {
            body_2 += chunk.toString();
        });
        req.on('end', function () {
            try {
                var updatedTodo = JSON.parse(body_2);
                var index = todos.findIndex(function (t) { return t.id === id_1; });
                if (index === -1) {
                    res.writeHead(404, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ error: 'Todo not found' }));
                }
                else {
                    todos[index] = __assign(__assign({}, todos[index]), updatedTodo);
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify(todos[index]));
                }
            }
            catch (error) {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Invalid JSON' }));
            }
        });
    }
    else if (method === 'DELETE' && pathname.startsWith('/todos')) {
        var id_2 = parseInt(pathname.split('/')[2]);
        var index = todos.findIndex(function (t) { return t.id === id_2; });
        if (index === -1) {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Todo not found' }));
        }
        else {
            todos = todos.filter(function (t) { return t.id !== id_2; });
            res.writeHead(204);
            res.end();
        }
    }
    else {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Not Found' }));
    }
});
var PORT = 3000;
server.listen(PORT, function () {
    console.log("Server running at http://localhost:".concat(PORT, "/"));
});
