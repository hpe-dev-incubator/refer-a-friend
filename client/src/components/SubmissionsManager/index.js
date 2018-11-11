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
      referrals: ['', '', ''],
      errors: { 
        emailCheckin: '', 
        firstName: '', 
        lastName: '',
        emailRefer: '', 
        ref1: '', 
        ref2: '', 
        ref3: '' 
      },
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
    const { errors } = this.state;
    errors.emailCheckin = '';
    errors.emailRefer = '';
    this.setState({ email: email, errors: errors });
  }
  onReferralChange(index, event) {
    const referral = event.target.value;
    const { referrals, errors } = this.state;
    referrals[index] = referral;
    errors.ref1 = '';
    errors.ref2 = '';
    errors.ref3 = '';
    this.setState({ referrals: referrals, errors: errors });
  }
  onNameChange(label, event) {
    const name = event.target.value;
    const re = /^[a-zA-Z]*$/
    const { errors } = this.state;
    errors.firstName = '';
    errors.lastName = '';
    if(re.test(name)) {
      if(label === 'first') {
        this.setState({ firstName: name, errors: errors });
      }else{
        this.setState({ lastName: name, errors: errors });
      }
    }
  }
  /* Handlers to open and close modal */
  onOpen() {
    this.setState({ modalOpen: true });
  }
  onClose() {
    this.setState({ modalOpen: false });
  }
  /* Handler for submitting check-in and referrals. Checks server response for success property */
  handleErrors(response) {
    if(!response.success) {
      throw Error(response.error);
    }
    return response;
  }
  /* Handler for email validation */
  handleEmailValidation(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  onReferralSubmit() {
    const { email, firstName, lastName, referrals, errors } = this.state;
    if(referrals[0].trim().length === 0) {
      errors.ref1 = 'Cannot be blank';
      this.setState({ errors: errors });
      return;
    }
    if(!this.handleEmailValidation(referrals[0])) {
      errors.ref1 = 'Must be a valid email address';
      this.setState({ errors: errors });
      return;
    }
    if(referrals[1].trim().length === 0) {
      errors.ref2 = 'Cannot be blank';
      this.setState({ errors: errors });
      return;
    }
    if(!this.handleEmailValidation(referrals[1])) {
      errors.ref2 = 'Must be a valid email address';
      this.setState({ errors: errors });
      return;
    }
    if(referrals[2].trim().length === 0) {
      errors.ref3 = 'Cannot be blank';
      this.setState({ errors: errors });
      return;
    }
    if(!this.handleEmailValidation(referrals[2])) {
      errors.ref3 = 'Must be a valid email address';
      this.setState({ errors: errors });
      return;
    }
    if(firstName.trim().length === 0) {
      errors.firstName = 'Cannot be blank.';
      this.setState({ errors: errors });
      return;
    }
    if(lastName.trim().length === 0) {
      errors.lastName = 'Cannot be blank.';
      this.setState({ errors: errors });
      return;
    }
    if(email.trim().length === 0) {
      errors.emailRefer = 'Cannot be blank.';
      this.setState({ errors: errors });
      return;
    }
    if(!this.handleEmailValidation(email)) {
      errors.emailRefer = 'Must be a valid email address';
      this.setState({ errors: errors });
      return;
    }
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
    .then((response) => {
      console.log('RES!',response);
      this.setState({ email: '', firstName: '', lastName: '', referrals: [] });
      this.props.history.push('/thankyou');
    })
    .catch(error => console.log(error))
  }
  onCheckInSubmit() {
    const { email, errors } = this.state;
    console.log(this.handleEmailValidation(email));
    if(email.trim().length === 0) {
      errors.emailCheckin = 'Cannot be blank.'
      this.setState({ error: errors})
      return;
    }
    if(!this.handleEmailValidation(email)) {
      errors.emailCheckin = 'Must be a valid email address';
      this.setState({ errors: errors });
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
    const { errors, checkedIn, modalOpen, email, firstName, lastName } = this.state;
    let layer;
    if(modalOpen) {
      layer = <ReferralForm email={email} firstName={firstName} lastName={lastName} onClose={this.onClose} errors={errors} onReferralChange={this.onReferralChange} onSubmit={this.onReferralSubmit} onNameChange={this.onNameChange} onEmailChange={this.onEmailChange}/>
    }
    return(
      <Box       
        background="neutral-1"
        basis="1/2"
        overflow="hidden"
      >
        {checkedIn ? <CheckedIn /> : <CheckIn  errors={errors.emailCheckin} onChange={this.onEmailChange} onSubmit={this.onCheckInSubmit}/>}
        <ReferAHacker checkedIn={checkedIn} onOpen={this.onOpen}/>
        {layer}
      </Box>
    )
  }
}

export default SubmissionsManager;