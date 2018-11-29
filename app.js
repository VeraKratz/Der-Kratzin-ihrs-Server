require('dotenv').config()

var express = require('express')
var app = express()

require('./setup/setupSecurity')(app) //standardlibary konfiguriert mit helmet
require('./setup/setupCors')(app)
require('./setup/setupDefaults')(app) //hier wir die app gespeichert in der function aufgerufen
require('./setup/setupRoutes')(app)
require('./setup/setupMongo')(app)
require('./setup/setupErrors')(app)

module.exports = app
