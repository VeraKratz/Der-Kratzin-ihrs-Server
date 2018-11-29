var express = require('express')
var router = express.Router()
var Todo = require('../models/Todo')

router.get('/', (req, res) => {
  Todo.find({})
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

router.post('/', (req, res) => {
  Todo.create(req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

router.delete('/:id', (req, res) => {
  Todo.findByIdAndDelete(req.params.id)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

router.patch('/:id', (req, res) => {
  Todo.findByIdAndUpdate(req.params.id, req.body, { new: true }) //hier gibt er das original zurück aber nicht das geänderte
    //es sei denn wir machen { new: true }
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

router.get('/clear', (req, res) => {
  Todo.deleteMany() //normalerweise nicht machen, aber hier zu testzwecken möglich.
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

module.exports = router
