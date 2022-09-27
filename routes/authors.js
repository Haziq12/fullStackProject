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
router.post('/', async (req, res) => {
  const author = new Author({
    name: req.body.name,
  })
  try {
    const newAuthor = await author.save()
    // res.redirect(`authors/${newAuthor.id}`)
    res.redirect('authors')
  } catch {
    res.render('authors/new', {
      author: author,
      errorMessage: 'Error creating author'
    })
  }
})

module.exports = router 