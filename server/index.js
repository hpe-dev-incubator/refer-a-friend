const express = require('express');
const bodyParser = require('body-parser');
const port  = process.env.PORT || 3000;

const db = require('./models');
const Referrers = db.referrers;
const Referrals = db.referrals;
console.log(db);

const app = express();
app.use(bodyParser.json());

app.post('/api/refer-a-friend', (req, res) => {
  if(!req.body.name) {
    res.status(400).send({ success: false, type: 'Critical', error: 'Request body is missing a name property.' })
  }
  if(!req.body.referrals) {
    res.status(400).send({ success: false, type: 'Critical', error: 'Reqeust body is missing a referrals property' })
  }
  if(!req.body.email) {
    res.status(400).send({ success: false, type: 'Critical', error: 'Request body is missing an email property' })
  }
  const { name, email, referrals } = req.body;
  Referrers.findOne({ where: {email: email}})
  .then(referrer => {
    if(referrer) {
      res.send({ success: false, type: 'Email Ref', error: 'Email already exists' });
    }else{
      return referrer;
    }
  })
  .then(() => {
    referrals.map((email, index) => {
      Referrals.findOne({ where: { email: email} })
      .then(referral => {
        if(referral) {
          res.send({ success: false, type: `ref${index}`, error: 'Email already exists.' });
        }
      })
    })
  })
  .then(() => {
    Referrers.create({ email: email, name: name })
    .then(referrer => {
      console.log('THIS IS THE ID',referrer.id);
      referrals.map(email => {
        Referrals.create({ email: email, referrerId: referrer.id })
      })
    })
    .then(() => res.send({ success: true }));
  })
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