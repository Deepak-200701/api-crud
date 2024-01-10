require('./module/db.module')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const test = require('./routes/test')
const user = require('./routes/user.routes')

app.use(bodyParser.urlencoded({ extended: false }))

app.use('/',test)
app.use('/user',user)

app.listen(8080)