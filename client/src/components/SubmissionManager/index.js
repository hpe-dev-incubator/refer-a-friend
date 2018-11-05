import React, { Component } from 'react';
import { Box, Button, Paragraph } from 'grommet';

class SubmissionManager extends Component {
  constructor(){
    super();
    this.state = {
      referrals: ['Sardu', 'Bolivar', 'Goodweather'],
      referrer: 'Setrakian'
    };
    this.onReferralSubmit = this.onReferralSubmit.bind(this);
    this.onCheckinSubmit = this.onCheckinSubmit.bind(this);
  }
  onReferralSubmit(event) {
    return fetch('/api/refer-a-friend', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ referrer: this.state.referrer, referals: this.state.referrals })
    })
    .then(response => console.log(response))
  }
  onCheckinSubmit(event) {
    console.log(event);
  }
  render() {
    return(
      <Box>
        <Button onClick={this.onReferralSubmit} label="Refer a Friend!"></Button>
        <Button onClick={this.onCheckinSubmit} label="Check-in!"></Button>
      </Box>
    )
  }
}

export default SubmissionManager;