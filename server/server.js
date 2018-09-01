const express = require('express')
const bodyParser = require('body-parser')
const compress = require('compression')
const helmet = require('helmet')
const cors = require('cors')
const path = require('path')
const config = require('../config/config')

const CURRENT_WORKING_DIR = process.cwd()
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(compress())
app.use(helmet())
app.use(cors())

app.listen(config.port, (err) => {
  if (err) {
    console.log(err)
  } else {
    console.info(`Server started on port %s. ${config.port}`)
  }
})
