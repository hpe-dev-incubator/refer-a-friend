const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
const port  = process.env.PORT || 3000;

const db = require('./models');
const Referrers = db.referrers;
const Referrals = db.referrals;

const sendGrid = require('./sendGrid');

const app = express();
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
  Referrers.findOne({ where: {email: email}})
  .then(referrer => {
    if(referrer) {
      res.send({ success: false, type: 'Email Ref', error: 'Email already exists.' });
      throw new Error('Referral error - email already exists in referrer table.')
    }
  })
  .then(() => {
    Referrals.findAll({ where: { email: referrals}})
    .then(referrals => {
      if(referrals.length > 0) {
        let foundEmails = [];
        referrals.map(referral => {
          foundEmails.push(referral.email)
        })
        console.log('-------------------------------')
        console.log(foundEmails);
        console.log('-------------------------------')
        res.send({ success: false, type: 'Ref', foundEmails: foundEmails, error: 'Email already exists.' })
        throw new Error('Referral error - email exists within the referrals table.')
      }
    })
    .then(() => {
      Referrers.create({ email: email, name: name })
      .then(referrer => {
        referrals.map(email => {
          console.log(`SEND INVITATION EMAIL WITH SENDGRID TO: ${email}`)
          Referrals.create({ email: email, referrerId: referrer.id })
        })
      })
      .then(() => res.send({ success: true }));
    })
    .catch(error => console.log(error))
  })
});

app.post('/api/check-in', (req, res) => {
  const { email } = req.body;
/*   sendGrid({ recipient: 'iankbovard@gmail.com', subject: 'THIS IS THE SUBJECT', content: 'WORK DAMN YOU!!' }); */
  if(!email){
    res.status(400).send({ success: false, error: 'Request body is missing an email property.' });
    return;
  }
  Referrals.findOne({ where: { email: email }})
  .then(referral => {
    if(!referral){
      res.send({ success: false, type: 'Check-in', error: 'Email not found among referrals' });
      throw new Error('Check-in error - email not found in referrals table.')
    }
    if(referral.checkedIn) {
      res.send({ success: false, type: 'Check-in', error: 'Already checked in with this email address.' });
      throw new Error('Check-in error - email found in referrals table with checked in flag set to true.')
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
            console.log(`SEND PRIZE WINNER EMAIL WITH SENDGRID TO: ${email}` );
            res.send({ success: true });
          }else{
            res.send({ success: true });
          }
        })
      })
    })
  })
  .catch(error => console.log(error))
});

db.sequelize.sync().then(() => {
  app.listen(port, () => console.log(`listening on port ${port}`))
});