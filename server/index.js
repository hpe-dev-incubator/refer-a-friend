const express = require('express');
const bodyParser = require('body-parser');
const port  = process.env.PORT || 3000;

const db = require('./models');
console.log(db);

const app = express();
app.use(bodyParser.json());

app.post('/api/refer-a-friend', (req, res) => {
  console.log('THIS IS THE REFER REQ', req.body);
  if(!req.body.name) {
    res.status(400).send({ success: false, error: 'Request body is missing a name property.' })
  }
  if(!req.body.referrals) {
    res.status(400).send({ success: false, error: 'Reqeust body is missing a referrals property' })
  }
  if(!req.body.email) {
    res.status(400).send({ success: false, error: 'Request body is missing an email property' })
  }
  res.send({ success: true });
});

app.post('/api/check-in', (req, res) => {
  console.log('THIS IS THE CHECK IN REQ',req.body);
  if(!req.body.email){
    res.status(400).send({ success: false, error: 'Request body is missing an email property.' });
  }
  res.send({ success: true });
});

db.sequelize.sync().then(() => {
  app.listen(port, () => console.log(`listening on port ${port}`))
});