require('dotenv').config()

const path = require('node:path')
const express = require('express')
const indexRouter = require('./routes/indexRouter')

const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.urlencoded({extended: true}))
app.use('/', indexRouter)

const PORT = process.env.PORT
app.listen(PORT, (error) => {
    if (error) {
        console.log(error)
    }
    console.log(`Listening on port ${PORT}`)
})