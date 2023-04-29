const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    switch (req.url) {
      case "/":
        res.write("home page");
        break;
      case "/about":
        res.write("about");
        break;
      case "/contact-me":
        res.write("contact me");
        break;
      default:
        res.write(req.url);
    }
    res.end();
  })
  .listen(5000);
