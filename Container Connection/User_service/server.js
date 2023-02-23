const express = require('express')

const cors = require('cors')

const usersRouter = require('./routes/user')

const app = express()

app.use(cors('*'))
app.use(express.json())

app.use('/user', usersRouter)

app.listen(4000, '0.0.0.0', () => {
    console.log('Userserver started on port 4000 ')
})