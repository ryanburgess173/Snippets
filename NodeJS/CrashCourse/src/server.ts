import "dotenv/config";
import http, { IncomingMessage, Server, ServerResponse } from "http";

const PORT: number = Number(process.env.PORT) || 8000;
const HOST: string = process.env.HOST || "127.0.0.1";

const server: Server = http.createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    //res.setHeader("Content-Type", "text/html");
    //res.statusCode = 404;
    console.log(req.url);
    console.log(req.method);

    //res.writeHead(500, { "Content-Type": "application/json" });
    //res.end(JSON.stringify({ message: "Server Error" }));

    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Hello World</h1>");
  }
);

server.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}`);
});
