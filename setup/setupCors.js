module.exports = function(app) {
  var cors = require('cors')

  // @see https://www.npmjs.com/package/cors#configuration-options
  app.use(
    cors({
      origin: [
        'http://localhost:3000',
        'https://neuefische-todo-app.netlify.com'
      ], //hier schreibe ich rein was requested werden darf
      methods: ['OPTIONS', 'GET', 'POST', 'PATCH', 'DELETE']
    })
  )
}
