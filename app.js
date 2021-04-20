const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 8080;
const app = express();
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.get('/', (req, res) => {
  res.send('Hello World!')
})

const newEntry = require('./routes/newEntry');
app.post('/newEntry', newEntry);


app.listen(port, () => {
  console.log(`chillin\' at http://localhost:${port}`)
})