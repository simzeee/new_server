// A program that receives and sends messages. Specifically HTTP messages.

const http = require("http");
const chalk = require("chalk");

const server = http.createServer();

server.on("request", (request, res) => {
  // res.writeHead(200, { "Content-Type": "application/json" });
  if (request.url === "/party") {
    res.setHeader("Content-Type", "text/html")
    res.writeHead(200);
    console.log('what')

    res.end(`<style>
    body {
      background-color: black;
      color: white;
    }
    </style><html>You found the party. &#127865 &#127866	&#127867 &#127849</html>`);
  } else {
    res.end("Hello World");
  }
});

// The default port when using HTTP is 80 and HTTPS is 443
const port = 8000;
server.listen(port, () => {
  console.log(chalk.green(`listening on port ${port}`));
});
