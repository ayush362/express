const express = require('express');
const app = express();

function validateUser(req, res, next) {
    res.locals.validated = true
    console.log('validated run!')
    next();
}



// This will run validate user in all paths and all methods
//1.
app.use(validateUser)
// This will run validate user in /admin all methods
//2.
app.use('/admin',validateUser)
// This will run validate user in get only on / get methods
//3.
app.get('/',validateUser)



app.get('/', (req, res, next) => {
    res.send("<h1>Main page</h1>")
    console.log(res.locals.validated)
})



app.get('/admin', (req, res, next) => {
    res.send("<h1>Admin page</h1>")
    console.log(res.locals.validated)
})



app.listen(3000)