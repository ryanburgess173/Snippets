const http = require('http');
import {IncomingMessage, ServerResponse} from 'http';

const server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
    const { url, method } = req;

    res.writeHead(200, { 'Content-Type' : 'text/plain' });
    res.end(`You made a ${method} request to ${url}`);
});

server.listen(3000, () => {
    console.log('Server running at localhost:3000');
});