// A program that receives and sends messages. Specifically HTTP messages.

const http = require("http");

const server = http.createServer();

server.on("request", (request, res) => {
  // res.writeHead(200, { "Content-Type": "application/json" });

  res.end("Hello World");
});

// The default port when using HTTP is 80 and HTTPS is 443
const port = 8000;
server.listen(port, () => {
  console.log(`listening on port ${port}`);
});
