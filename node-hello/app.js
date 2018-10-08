const logger = require("./logger");
const http = require("http");
const fs = require("fs");

http
  .createServer(function(req, res) {
    fs.readFile("index.html", function(err, data) {
      logger.log("Server started");
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
      logger.log("Server stoped");
    });
  })
  .listen(9090);
