const http = require("http");
const fs = require("fs");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");

  let path = "./";

  switch (req.url) {
    case "/":
      path += "backend/index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "backend/about.html";
      res.statusCode = 200;
      break;
    default:
      res.setHeader("Location", "/");
      res.statusCode = 301;
      break;
  }

  fs.readFile(path, (err, data) => {
    if (err) {
      console.error(err);
      response.end();
    } else {
      res.end(data);
    }
  });
});
server.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
