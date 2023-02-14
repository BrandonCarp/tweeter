const http = require("http");
const fs = require("fs");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  fs.readFile("BackEnd/index.html", (err, data) => {
    if (err) {
      console.error(err);
      response.end();
    } else {
      res.write(data);
      res.end();
    }
  });
});
server.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
