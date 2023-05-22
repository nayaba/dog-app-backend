const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const dogsRouter = require('./routes/dogs')
const cors = require('cors')

require('dotenv').config()
require('./config/database')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// ROUTES
app.use('/dogs', dogsRouter)

app.listen(port, () => {
  console.log('You are connected to the Port 3000')
})