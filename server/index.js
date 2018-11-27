const express = require('express');
const bodyParser = require('body-parser');
const emailBodyRef = require('./Emails/emailBodyRef')
const emailBodyWin = require('./Emails/emailBodyWin')
const dotenv = require('dotenv').config();
const port  = process.env.PORT || 3000;

const db = require('./models');
const Referrers = db.referrers;
const Referrals = db.referrals;

const sendGrid = require('./sendGrid');

const app = express();

const emailSubjectRef = 'You\'ve been invited to the HPE Discover Madrid Hack Shack!';

const emailSubjectWin = 'Come get your prize at the HPE DEV Hack Shack!';

app.use(bodyParser.json());

app.post('/api/refer-a-friend', (req, res) => {
  if(!req.body.name) {
    res.status(400).send({ success: false, type: 'Critical', error: 'Request body is missing a name property.' });
    return;
  }
  if(!req.body.referrals) {
    res.status(400).send({ success: false, type: 'Critical', error: 'Reqeust body is missing a referrals property' });
    return;
  }
  if(!req.body.email) {
    res.status(400).send({ success: false, type: 'Critical', error: 'Request body is missing an email property' });
    return;
  }
  const { name, email, referrals } = req.body;
  const duplicateIndexes = [];
  referrals.map((email, index, array) => {
    if(array.indexOf(email) !== index){
      duplicateIndexes.push(index);
    }
  });
  if(duplicateIndexes.length > 0) {
    res.send({ success: false, type: 'Duplicate Refs', duplicateIndexes: duplicateIndexes, error: 'Cannot refer the same person multiple times.'});
    return;
  }
  Referrers.findOne({ where: {email: email}})
  .then(referrer => {
    if(referrer) {
      res.send({ success: false, type: 'Duplicate Referrer', error: 'Email already exists.' });
      throw new Error('Referral error - email already exists in referrer table.')
    }
  })
  .then(() => {
    Referrers.create({ email, name })
    .then(({ id, email: referrerEmail, name }) => {
      referrals.map(email => {
        sendGrid({ recipient: email, subject: emailSubjectRef, content: emailBodyRef(name, referrerEmail) })
        Referrals.create({ email: email, referrerId: id })
      })
    })
    .then(() => res.send({ success: true }));
  })
  .catch(error => console.log(error))
});

app.post('/api/check-in', (req, res) => {
  const { email } = req.body;
  if(!email){
    res.status(400).send({ success: false, error: 'Request body is missing an email property.' });
    return;
  }
  Referrals.findAll({ where: { email: email }})
  .then(referrals => {
    if(referrals.length === 0){
      res.send({ success: false, type: 'Check-in not found', error: 'Email not found among referrals' });
      throw new Error('Check-in error - email not found in referrals table.')
    }
    return referrals;
  })
  .then(referrals => {
    let referrerIds = [];
    referrals.map(referral => referrerIds.push(referral.referrerId));
    Referrers.findAll({ where: { id: referrerIds }})
    .then(referrers => {
      referrers.map(referrer => {
        referrer.increment('checkinCount', { by: 1 })
        .then(referrer => {
          if(referrer.checkinCount === 3){
            sendGrid({ recipient: referrer.email, subject: emailSubjectWin, content: emailBodyWin() })
          }
        })
      })
    })
    .then(() => res.send({ success: true }))
  })
  .catch(error => console.log(error))
});

db.sequelize.sync().then(() => {
  app.listen(port, () => console.log(`listening on port ${port}`))
});
