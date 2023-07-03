const http = require('http');
// fs is the file system module
// fs gives node access to this computers file system
const fs = require('fs');
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'content-type': 'text/html' })
        // res.write('')
        const homePageHTML = fs.readFileSync('node.html')
        // console.log(homePageHTML)
        res.write(homePageHTML)
        res.end();
    }
    else if(req.url === '/index.png')
    {
        res.writeHead(200, { 'content-type': 'image/png' })
        // res.write('')
        const image = fs.readFileSync('index.png')
        // console.log(image)
        res.write(image)
        res.end();
    }
    else if(req.url === '/style.css')
    {
        res.writeHead(200, { 'content-type': 'text/css' })
        // res.write('')
        const css = fs.readFileSync('style.css')
        // console.log(image)
        res.write(css)
        res.end();
    }
    else
    {
        res.writeHead(404, { 'content-type': 'text/html' })
        res.write('<h4>This is not the page you are looking for </h4>')
        res.end();
    }
    // console.log(req)

})


server.listen(3000);