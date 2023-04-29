const http = require("http");
const fs = require("fs");
const path = require("path");
http
  .createServer((req, res) => {
    switch (req.url) {
      case "/":
        fs.readFile(
          path.join(__dirname, "/public", "index.html"),
          (err, data) => {
            if (err) throw err;
            res.write(data);
            res.end();
          }
        );
        break;
      case "/about":
        fs.readFile(
          path.join(__dirname, "/public", "about.html"),
          (err, data) => {
            if (err) throw err;
            res.write(data);
            res.end();
          }
        );
        break;
      case "/contact-me":
        fs.readFile(
          path.join(__dirname, "/public", "contact-me.html"),
          (err, data) => {
            if (err) throw err;
            res.write(data);
            res.end();
          }
        );
        break;
      default:
        res.write(req.url);
        res.end();
    }
  })
  .listen(5000);
