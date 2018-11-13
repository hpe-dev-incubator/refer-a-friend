const express = require('express');
const bodyParser = require('body-parser');
const port  = process.env.PORT || 3000;

const db = require('./models');
const Referrers = db.referrers;
const Referrals = db.referrals;

const app = express();
app.use(bodyParser.json());

app.post('/api/refer-a-friend', (req, res) => {
  if(!req.body.name) {
    res.status(400).send({ success: false, type: 'Critical', error: 'Request body is missing a name property.' });
  }
  if(!req.body.referrals) {
    res.status(400).send({ success: false, type: 'Critical', error: 'Reqeust body is missing a referrals property' })
  }
  if(!req.body.email) {
    res.status(400).send({ success: false, type: 'Critical', error: 'Request body is missing an email property' });
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
      referrals.map(email => {
        Referrals.create({ email: email, referrerId: referrer.id })
      })
    })
    .then(() => res.send({ success: true }));
  })
});

app.post('/api/check-in', (req, res) => {
  const { email } = req.body;
  if(!email){
    res.status(400).send({ success: false, error: 'Request body is missing an email property.' });
  }
  Referrals.findOne({ where: { email: email }})
  .then(referral => {
    if(!referral){
      res.send({ success: false, type: 'Check-in', error: 'Email not found among referrals' });
    }
    if(referral.checkedIn) {
      res.send({ success: false, type: 'Check-in', error: 'Already checked in with this email address.' })
    }
    return referral;
  })
  .then(referral => {
    referral.update({ checkedIn: true })
    .then(referral => {
      Referrers.findOne({ where: { id: referral.referrerId }})
      .then(referrer => {
        referrer.increment('checkinCount', { by: 1 })
        .then(referrer => {
          if(referrer.checkinCount === 3){
            console.log('SEND AN EMAIL WITH SENDGRID');
            res.send({ success: true });
          }else{
            res.send({ success: true });
          }
        })
      })
    })
  })
});

db.sequelize.sync().then(() => {
  app.listen(port, () => console.log(`listening on port ${port}`))
});