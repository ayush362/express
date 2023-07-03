const express = require('express');
const app = express();

// app.all('/',(req,res)=>{
//     res.send('<h1>Welcome to the home page</h1>')
// })
app.get('/', (req, res) => {
    console.log(req);
    res.send('<h1>Welcome to the home GET page</h1>')
})

app.post('/', (req, res) => {
    res.send('<h1>Welcome to the home POST page</h1>')
})

app.delete('/', (req, res) => {

})

app.put('/', (req, res) => {

})
app.listen(3000)