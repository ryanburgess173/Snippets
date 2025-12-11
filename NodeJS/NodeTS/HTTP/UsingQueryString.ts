const http = require('http');
const { URL } = require('url');
const querystring = require('querystring');
import { IncomingMessage, ServerResponse } from 'http';

const server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
    const baseURL = 'http://' + req.headers.host + '/';
    const parsedUrl = new URL(req.url, baseURL);
    const params = Object.fromEntries(parsedUrl.searchParams);

    const queryObj = {
        name: 'Ryan B',
        age: 27,
        interests: ['programming', 'legos', 'racing', 'photography', 'camping', 'hiking', 'reading', 'comics', 'guitar']
    };
    const queryStr = querystring.stringify(queryObj);

    res.writeHead(200, { 'Content-Type':'application/json' });
    res.end(JSON.stringify({
        path: parsedUrl.pathname,
        params,
        exampleQueryString: queryStr
    }, null, 2));
});

server.listen(3000);

export {}