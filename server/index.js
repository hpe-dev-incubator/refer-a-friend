const express = require('express');
const bodyParser = require('body-parser');

const port  = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.json());

app.post('/api/refer-a-friend', (req, res) => {
  console.log('THIS IS THE REQ',req.body);
});

app.post('/api/check-in', (req, res) => {
  console.log('THIS IS THE REQ',req.body);
});

app.listen(port, () => console.log(`listening on port ${port}...`));