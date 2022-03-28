const http = require('http');
const fs = require('fs');

//html rendering function
function renderHTML(path, res) {
    fs.readFile(path, null, function(error, data) {
        if(error) {
            res.writeHead(404);
            res.write('File not found');
        } else {
            res.write(data);
        }
        res.end();
    });
}

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode= 200;
    res.setHeader('Content-Type', 'text/html');
    //res.write('hello world');

    //routeing
    const url = req.url;
    if(url === '/aboutme') {
        renderHTML('./aboutme.html', res);
    } else if(url === '/contactme') {
        renderHTML('./contactme.html', res);
    } else if(url === '/'){
        renderHTML('./home.html', res);
    } else {
        res.writeHead('404');
        res.write('Route not found');
        res.end();
    }
});

server.listen(port, hostname, ()=>{
    console.log(`Server running at http://${hostname}:${port}`);
});