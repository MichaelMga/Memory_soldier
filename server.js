const http = require("http");
const fs = require("fs");



const server = http.createServer(
    (req, res) => {
        fs.readFile('./main.html', (err, data) => {
            if (err) {
                res.writeHead(404);
                res.end('File not found!');
            } else {
                res.writeHead(200);
                res.end(data);
            }
        })

    }
).listen(80);