const express = require('express')
const indexRoute = require('./src/routes/indexRoute')
const cors = require('cors')
const app = express()
const PORT = 3000

app.use(cors())
app.use(express.static('public'))
app.use(express.json())

app.use('/', indexRoute)

app.listen(PORT, console.log(`SERVIDOR EN PUERTO: ${PORT}...`))