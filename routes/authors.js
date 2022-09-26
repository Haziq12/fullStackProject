const express = require('express')
const router = express.Router()
const Author = require('../models/author')

// GET All Authors Route
router.get('/', (req, res) => {
  res.render('authors/index')
})

// GET New Author Route
router.get('/new', (req, res) => {
  res.render('authors/new', { author: new Author() })
})

// CREATE Author Route
router.post('/', (req, res) => {
  res.send('Create')
})

module.exports = router 