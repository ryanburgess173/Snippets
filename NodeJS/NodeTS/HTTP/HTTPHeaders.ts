const http = require('http');
import {IncomingMessage, ServerResponse} from 'http';

const server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
    res.writeHead(200, {
        'Content-Type':'text/html',
        'X-Powered-By':'Node.js',
        'Cache-Control':'no-cach, no-store, must-revalidate',
        'Set-Cookie':'sessionid=abc123; HttpOnly'
    });

    res.end('<h1>Hello World!</h1>');
});

server.listen(3000, () => {
    console.log('Server running on http://localhost:3000/');
});