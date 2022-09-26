const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')

app.set('view enginer', 'ejs')
app.set('.views', '__dirname + '/views)