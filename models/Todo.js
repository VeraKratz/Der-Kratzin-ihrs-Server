var mongoose = require('mongoose')

var TodoSchema = new mongoose.Schema({
  // finden wir in mongoose documentation
  text: mongoose.SchemaTypes.String,
  done: {
    type: mongoose.SchemaTypes.Boolean,
    default: false
  }
})

module.exports = mongoose.model('Todo', TodoSchema) //was man als erstes hier eingibt, ist der wichtige name...der geht in die datenbank
