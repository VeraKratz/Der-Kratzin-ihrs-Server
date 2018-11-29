// @see https://github.com/helmetjs/csp
var helmet = require('helmet')
var csp = require('helmet-csp')

module.exports = function(app) {
  app.use(helmet())
  // Take the defaults to start with
  app.use(
    csp({
      // Specify directives for content sources
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "'unsafe-inline'"],
        styleSrc: ["'self'", "'unsafe-inline'"],
        fontSrc: ["'self'"], //syntax schreibweise, hier müsste die Schrift rein gereicht werden
        imgSrc: ['*']
        // reportUri: '/report-violation',
      }
    })
  )
}
