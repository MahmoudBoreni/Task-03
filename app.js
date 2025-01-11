const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  fs.readFile("data.txt", (err, data) => {
    if (err) {
      res.writeHead(500, { "content-type": "text/plain" });
      res.end("error");
    } else {
      res.writeHead(200, { "content-type": "text/plain" });
      res.end(data);
    }
  });
});

const port = 3000;
const HOST = "127.0.0.1";

server.listen(port, host => {
  console.log(`server running on port ${port} , host ${HOST}`);
})