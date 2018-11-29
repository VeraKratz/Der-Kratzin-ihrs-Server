module.exports = function(app) {
  app.use('/', require('../routes/index'))
  app.use('/todos', require('../routes/todos')) //hier werden die pfade eingegeben wo was zu finden ist unter User z.B.
}
//hier werden alle routen geladen , im backend!
