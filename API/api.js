const express = require('express');
const app = express();


const pokemon = [
  {
    id: 1,
    name: 'pikachu'
  },
  {
    id: 2,
    name: 'raichu'
  },
]

app.use(express.json());

app.get('/', (req, res) => {
  return res.send('Hello world. From API');
});

app.get('/pokemon', (req, res) => {
  return res.send(pokemon)
})

app.get('/pokemon/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const poke = pokemon.find(p => p.id === id);
  if (!poke) {
    return res.status(404).send('Pokemon not found!')
  }
  return res.send(poke);
});

app.post('/pokemon', (req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  const poke = { id: id, name: name};
  pokemon.push(poke);
  return res.send(poke);
})

app.listen(5000, () => {
  console.log('listening on port 5000')
})