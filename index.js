// A program that receives and sends messages. Specifically HTTP messages.

const chalk = require('chalk');

const express = require('express');
const path = require('path');

const app = express();
const port = 8000;

app.use('/relax', express.static('relax'));
app.use('/countdown', express.static('countdown'))


app.get('/', (req, res) => {
  res.send('Hello World! I am using express.');
});

// app.get('/test', (req, res) => {
//   console.log(__dirname)
//   // res.sendFile(path.join(__dirname, '/Relaxer_App/index.html'));
//   // res.render('public/index.html')
// });

app.listen(port, () => {
  console.log(chalk.green(`listening on port ${port}`));
});

// const http = require("http");
// const server = http.createServer();

// server.on("request", (request, res) => {
//   // res.writeHead(200, { "Content-Type": "application/json" });
//   if (request.url === "/party") {
//     res.setHeader("Content-Type", "text/html")
//     res.writeHead(200);
//     console.log('what')

//     res.end(`<style>
//     body {
//       background-color: black;
//       color: white;
//     }
//     </style><html>You found the party. &#127865 &#127866	&#127867 &#127849</html>`);
//   } else {
//     res.end("Hello World");
//   }
// });

// // The default port when using HTTP is 80 and HTTPS is 443
// server.listen(port, () => {
//   console.log(chalk.green(`listening on port ${port}`));
// });
