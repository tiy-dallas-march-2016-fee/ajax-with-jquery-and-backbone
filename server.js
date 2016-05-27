var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static('public'));
app.use(bodyParser.json()); // support json encoded bodies


app.get('/api/animal', function(req, res) {
  console.log('GET collection');

  var animals = [
    { id: 87, name: 'Goofy', type: 'Dog' },
    { id: 432, name: 'Daffy', type: 'Duck' }
  ];

  res.send(animals);
});

app.get('/api/animal/:id', function(req, res) {
  console.log('GET - id', req.params.id);

  res.send({
    id: 827,
    name: 'Runover',
    type: 'Cat'
  });
});

app.post('/api/animal', function(req, res) {

  console.log('POST - name', req.body.name);
  console.log('POST - type', req.body.type);

  res.send({
    id: 99
  });
});

app.put('/api/animal/:id', function(req, res) {

  console.log('PUT - id', req.params.id);
  console.log('PUT - name', req.body.name);
  console.log('PUT - type', req.body.type);

  res.status(204).send();
});

app.delete('/api/animal/:id', function(req, res) {
  console.log('DELETE - id', req.params.id);

  res.status(204).send();
});

app.listen(3000, function() {
  console.log('listening on port 3000');
});
