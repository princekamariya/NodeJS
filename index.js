const http = require("http");
const fs = require("fs");

const PORT = process.env.PORT || 3000;
const home = fs.readFileSync("./index.html", "utf-8");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    return res.end(home);
  }
  if (req.url == "/about") {
    return res.end("<h1>About Page</h1>");
  }
  if (req.url == "/contact") {
    return res.end("<h1>Contact Page</h1>");
  }
});

server.listen(PORT,()=>{
    console.log(`Server started on PORT NUMBER: ${PORT}`);
})
