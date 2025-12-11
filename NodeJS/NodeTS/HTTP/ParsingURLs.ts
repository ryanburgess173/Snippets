const http = require('http');
const url = require('url');
import { IncomingMessage, ServerResponse } from 'http';

const server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;
    const query = parsedUrl.query;

    res.writeHead(200, { 'Content-Type' : 'application/json' });
    res.end(JSON.stringify({
        pathname,
        query,
        fullUrl: req.url
    }, null, 2));
});

server.listen(3000);