import React, { Component } from 'react';
import { Box, Text, FormField, Button, TextInput } from 'grommet';
import { CheckHeader } from './styles';

class SubmissionsManager extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      referrals: [],
      error: ''
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(event) {
    const email = event.target.value
    this.setState({ email: email, error: '' });
  }
  onSubmit() {
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
    .then(response => console.log(response));
  }

  /*   onReferralSubmit() {
    const { referrals, referrer } = this.state
    const filtered = referrals.filter((referral) => referral);
    if(referrer.trim().length === 0){
      return;
    }
    fetch('/api/refer-a-friend', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ referrer: referrer, referrals: filtered })
    })
    .then(response => console.log(response));
  } */
  render() {
    const { error } = this.state;
    return(
      <Box pad={{ "top": "large" }} direction="column">
      {/* Check-in Text, Form, and Button */}
        <Box 
          elevation="medium"
          pad={{ "top": "xsmall", "bottom": "large", "left": "large", "right": "large" }} 
          margin={{ "top": "xlarge" , "left": "medium", "right": "medium"}} 
          direction="column" 
          round="small" 
          background="white" 
          align="start"
        >
          <CheckHeader 
            margin={{ "top": "large", "bottom": "small" }}
          >
            Check-in
          </CheckHeader>
          <Text 
            size="medium" 
            color="neutral-2" 
            margin={{ "bottom": "small", "right": "xlarge" }}
          >
            A friend referred you to us? Check in now.
          </Text>
          <FormField 
            label="Email Address" 
            fill={true}
            error={error}
          >
            <TextInput onChange={this.onChange}></TextInput>
          </FormField>
          <Box 
            background="brand" 
            round="xsmall" 
            margin={{ "top": "medium" }}
          >
            <Button 
              fill={true} 
              margin={{ "top": "xsmall", "bottom": "xsmall" }}
              onClick={this.onSubmit}
            >
              <Text 
                size="xlarge" 
                weight="bold" 
                margin={{ "left": "large", "right": "large"}}
              >
                Check in
              </Text>
            </Button>
          </Box>
        </Box>
      {/* Refer a Hacker Text and Button */}
        <Box
          align="start"
          margin={{ "top": "large", "left": "large" }}
        >
          <CheckHeader
            margin={{ "bottom": "small" }}
          >
            Refer a Hacker
          </CheckHeader>
            <Text 
              size="medium" 
              margin={{ "bottom": "medium" }}
            >
              Participate in our referral program to win great prizes.
            </Text>
            <Box 
            background="brand" 
            round="xsmall"
            margin={{ "bottom": "xlarge" }} 
          >
            <Button 
              pad="small" 
              margin={{ "top": "small", "bottom": "small" }}
            >
              <Text 
                size="xlarge" 
                weight="bold" 
                margin={{ "left": "medium", "right": "medium"}}
              >
                Refer a Hacker
              </Text>
            </Button>
          </Box>
        </Box>
      </Box>
    )
  }
}

export default SubmissionsManager;