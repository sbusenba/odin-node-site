const http = require("http");

http
  .createServer((req, res) => {
    switch (req.url) {
      case "/":
        res.write("home page");
        res.end();
        break;
      default:
        res.write(req.url);
    }
    res.end();
  })
  .listen(5000);
