const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {

     const parsedUrl = url.parse(req.url, true);
     const method = req.method.toLowerCase();
     const path = parsedUrl.pathname;

     res.setHeader('Content-Type', 'text/html');
     res.end(`pathname: ${path} dan method ${method}`);
});


server.listen(3000, () => {
     console.log("server running on port 3000");
})