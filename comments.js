// Create web server
// Create a web server that listens to a specific port and returns the comments from the comments.json file.
// The server should listen to the port 3000.
// The server should return the comments from the comments.json file.
// The server should return the comments as JSON.

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });

    const readStream = fs.createReadStream(__dirname + '/comments.json', 'utf-8');
    readStream.pipe(res);
});

server.listen(3000, '