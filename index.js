// () initialize the require express as a function import
const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json())

app.get('/vegetable', (req, res) => {
  res.status(200).send({
    vegetable: '🎃',
    flavor: 'delicious'
  })
})

app.post('/vegetable/:id', (req, res) => {
  const {id} = req.params;
  const {flavor} = req.body;

  if (!flavor) {
    res.status(418).send({ message: 'We need the flavor to procede!'})
  }

  res.send({
    vegetable:`🎃 with ${flavor} , enjoy ${id}`
  }),

  () => console.log(`ok`)
})

app.listen(
  PORT,
  () => console.log(`it's alive on http://localhost:${PORT}`)
)
