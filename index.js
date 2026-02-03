require('dotenv').config()

const path = require('node:path')
const express = require('express')
const indexRouter = require('./routes/indexRouter')

const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

<<<<<<< HEAD
app.use(express.urlencoded({extended: true}))
=======
>>>>>>> 68a1b4ff41fd16980e3e95058d1fc5278e6a3d44
app.use('/', indexRouter)

const PORT = process.env.PORT
app.listen(PORT, (error) => {
    if (error) {
        console.log(error)
    }
    console.log(`Listening on port ${PORT}`)
})