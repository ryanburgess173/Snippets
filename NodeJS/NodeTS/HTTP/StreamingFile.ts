const http = require('http');
import { ReadStream } from 'fs';
import {IncomingMessage, Server, ServerResponse} from 'http';
const fs = require('fs');
const path = require('path');

const server: Server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
    const filePath: string = path.join(__dirname, req.url);

    fs.access(filePath, fs.constants.F_OK, (err: Error) => {
        if(err){
            res.statusCode = 404;
            res.end('File not found');
            return;
        }

        fs.stat(filePath, (err: Error, stats: Set<string>) => {
            if(err){
                res.statusCode = 500;
                res.end('Server error');
                return;
            }

            res.setHeader('Content-Length', stats.size);
            res.setHeader('Content-Type', 'application/octet-stream');

            const stream: ReadStream = fs.createReadStream(filePath);

            stream.on('error', (error: Error) => {
                console.error('Error reading file:', err);
                if(!res.headersSent){
                    res.statusCode = 500;
                    res.end('Error reading file');
                }
            });

            stream.pipe(res);
        });
    });
});

const PORT: number = 3000;
server.listen(PORT, () => {
    console.log(`File server running at http://localhost:${PORT}/`);
});