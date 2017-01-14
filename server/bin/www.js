#!/usr/bin/nodejs
let debug = require('debug')('my-application')
let app = require('../../app')

app.set('port', process.env.PORT || 4000)

let server = app.listen(app.get('port'),function(){
  debug('Express server listening on port ' + server.address().port)
})
