import {IncomingMessage, ServerResponse} from 'http';
const http = require('http');

const server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
    res.writeHead(200, { 'Content-Type':'text/plain' });
    res.end('Hello, World\n');
});

server.listen(3000, 'localhost', () => {
    console.log('Server running at http://localhost:3000/');
});