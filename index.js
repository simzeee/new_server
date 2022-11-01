// A program that receives and sends messages. Specifically HTTP messages.

const chalk = require('chalk');

const express = require('express');
const path = require('path');

const app = express();
const port = 8000;

app.use('/relax', express.static('relax'));
app.use('/countdown', express.static('countdown'));

app.get('/', (req, res) => {
  res.send(`<div><a href="https://www.johnsims.party/relax" target="_blank"> Relax </a></div>
  <div><a href="https://www.johnsims.party/countdown" target="_blank"> Countdown </a></div>
  <div><a href="https://www.johnsims.party/piano" target="_blank"> Piano </a></div>
  <div><a href="https://www.johnsims.party/party" target="_blank"> Party </a></div>
  `);
});

app.get('/party', (req, res) => {
  res.setHeader("Content-Type", "text/html")
      res.writeHead(200);
      console.log('what')
  
      res.end(`<style>
      body {
        background-color: black;
        color: white;
      }
      </style><html>You found the party. &#127865 &#127866	&#127867 &#127849</html>`);
})

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
