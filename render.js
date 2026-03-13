const http = require('http');

const server = http.createServer((req, res) => {

  res.writeHead(200, {'Content-Type': 'text/html'});

  res.write(`
    <html>
      <head>
        <title>My Web Page</title>
      </head>
      <body>
        <h1>Welcome to Node.js</h1>
        <p>This HTML page is rendered using Node.js</p>
      </body>
    </html>
  `);

  res.end();
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
