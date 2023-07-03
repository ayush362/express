const express = require('express');
// An app is the express function (createApplication inside the express module) 
// invoked and is an express express.application
const app = express();
const path = require('path')
app.use(express.static('public'))

// all is a methods,and it takes 2 args:
// 1.route
// 2.callback to run if the route is requested
app.all('/', (req, res) => {
    // express handles the basic Headers
    // res.send(`<h1>this is the home page wallah!</h1>`)
    console.log(path.join(__dirname + '/node.html'))
    res.sendFile(path.join(__dirname + '/node.html'))
    // express handles the end
});

app.listen(3000);
console.log("The server is listening in port 3000")
 