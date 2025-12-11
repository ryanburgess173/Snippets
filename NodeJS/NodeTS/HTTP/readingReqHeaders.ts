const http = require('http');
import { IncomingMessage, ServerResponse } from 'http';

const server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
    console.log('Request headers: ', req.headers);

    const userAgent = req.headers['user-agent'];
    const acceptLanguage = req.headers['accept-language'];

    res.writeHead(200, { 'Content-Type':'text/plain' });
    res.end(`User-Agent: ${userAgent}\nAccept-Language: ${acceptLanguage}`);
});

server.listen(3000);