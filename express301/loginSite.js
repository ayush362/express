const path = require('path');

const express = require('express');
const app = express();

const cookieParser = require('cookie-parser')

const helmet = require('helmet');
const { urlencoded } = require('body-parser');
app.use(helmet());

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'))

app.get('/',(req,res,next)=>{
    res.send("Sanity check!")
})

app.get('/login',(req,res,next)=>{
    res.render('login')
})

app.post('/process_login',(req,res,next)=>{
    // req.body  is made by urlencoded , ehich parses the http message for the send data
    const password = req.body.password
    const username = req.body.username
    // check the data base if user Credential are valid
    // if they are valid save them in cookie and send them to welcome page

    if(password === 'x'){
        // res.cookie take 2 args:
        // 1 name of the cookie
        // 2 value to set it to
        res.cookie('username',username);
        // res.redirect take one arg where to send the browser
        res.redirect('/welcome')

    }
    else{
        res.redirect('/login?msg=fail')
    }

    // res.json(req.body)
})

app.get('/welcome',(req,res,next)=>{
    res.render('welcome',{
        username: req.cookies.username
    })
})

app.get('/logout',(req,res,next)=>{
    res.clearCookie('username');
    res.redirect('/login')
})
app.listen(3000)
console.log("The server is listening on port 3000")