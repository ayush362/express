const path = require('path')

const express = require('express')
const app = express();

const helmet = require('helmet')
app.use(helmet())

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded())
app.set('view engine','pug')
app.set('views',path.join(__dirname,'views'))

function validateUser(req,res,next)
{
    res.locals.validated = true
    next()
}

app.use(validateUser)

app.get('/', (req, res, next) => {
    res.render("index",{
        countries:[{
            name:"India",
            capital:"Delhi",
            western:true
        },
        {
            name:"England",
            capital:"London",
            western:false
        }
    ],
        msg:"Success!",
        msg2:"Failure",
        html: `<p><img src="data:image/png;base64,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" /></p>`
    })
})

app.listen(3000)