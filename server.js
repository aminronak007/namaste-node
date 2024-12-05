const http = require("node:http");

const server = http.createServer((req, res) => {
  if (req.url === "/getSecretData") {
    res.end("There is no secret data.");
  }
  res.end("Hello World!");
});

const port = 7777;
server.listen(port);
