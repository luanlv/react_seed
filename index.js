let express = require('express')
let app = express()

//Set view engine
app.set('views', './views')
app.set('view engine', 'pug')

app.use('/assets', express.static('public'))

app.get('/', (req, res, next) => {
  res.render('index', {title: 'demo', message: 'Hello world !!'})
})

app.get('/test', (req, res, next) => {
  "use strict";
  res.send([1, 2, 3].map(x => x*x*x))
})

const PORT = 3000
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`)
})