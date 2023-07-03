const express = require('express');
const app = express();
const helmet = require('helmet')


app.use(helmet())
app.use(express.static('public'))
app.use(express.urlencoded({extended:false}))



app.post('/ajax', (req, res) => {
    console.log(req)
    res.json("test")
})

app.listen(3000)