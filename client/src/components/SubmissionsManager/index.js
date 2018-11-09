import React, { Component } from 'react';
import { Box } from 'grommet';

import CheckIn from '../CheckIn';
import CheckedIn from '../CheckedIn';
import ReferAHacker from '../ReferAHacker';
import ReferralForm from '../ReferralForm';

class SubmissionsManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      referrals: [],
      error: '',
      checkedIn: false,
      modalOpen: false
    }
    this.onOpen = this.onOpen.bind(this);
    this.onClose = this.onClose.bind(this);

    this.onReferralSubmit = this.onReferralSubmit.bind(this);
    this.onCheckInSubmit = this.onCheckInSubmit.bind(this);

    this.onReferralChange = this.onReferralChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
  }
  /* Handlers for check-in email and refferal emails */
  onEmailChange(event) {
    const email = event.target.value;
    this.setState({ email: email, error: '' });
  }
  onReferralChange(index, event) {
    const referral = event.target.value;
    const { referrals } = this.state;
    referrals[index] = referral;
    this.setState({ referrals: referrals })
  }
  onNameChange(label, event) {
    const name = event.target.value;
    const re = /^[a-zA-Z]*$/
    if(re.test(name)) {
      if(label === 'first') {
        this.setState({ firstName: name });
      }else{
        this.setState({ lastName: name });
      }
    }
  }
  /* Handlers to open and close modal and to reset state */
  onOpen() {
    this.setState({ modalOpen: true });
  }
  onClose() {
    this.setState({ modalOpen: false })
  }
  /* Handlers for submitting check-in and referrals */
  handleErrors(response) {
    if(!response.success) {
      throw Error(response.error);
    }
    return response;
  }
  onReferralSubmit() {
    const { email, firstName, lastName, referrals } = this.state;
    fetch('/api/refer-a-friend', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: `${firstName} ${lastName}`, email: email, referrals: referrals })
    })
    .then(response => response.json())
    .then(response => this.handleErrors(response))
    .then(() => {
      this.setState({ email: '', firstName: '', lastName: '', referrals: [] });
      this.props.history.push('/thankyou');
    })
    .catch(error => console.log(error))
  }
  onCheckInSubmit() {
    const { email } = this.state;
    if(email.trim().length === 0) {
      this.setState({ error: 'Cannot be blank'})
      return;
    }
    fetch('/api/check-in', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: email })
    })
    .then(response => response.json())
    .then(response => this.handleErrors(response))
    .then(this.setState({ checkedIn: true, email: '' }))
    .catch(error => console.log(error));
  }
  render() {
    const { error, checkedIn, modalOpen, email, firstName, lastName } = this.state;
    let layer;
    if(modalOpen) {
      layer = <ReferralForm email={email} firstName={firstName} lastName={lastName} onClose={this.onClose} error={error} onReferralChange={this.onReferralChange} onSubmit={this.onReferralSubmit} onNameChange={this.onNameChange} onEmailChange={this.onEmailChange}/>
    }
    return(
      <Box       
        background="neutral-1"
        basis="1/2"
        overflow="hidden"
      >
        {checkedIn ? <CheckedIn /> : <CheckIn  error={error} onChange={this.onEmailChange} onSubmit={this.onCheckInSubmit}/>}
        <ReferAHacker checkedIn={checkedIn} onOpen={this.onOpen}/>
        {layer}
      </Box>
    )
  }
}

export default SubmissionsManager;