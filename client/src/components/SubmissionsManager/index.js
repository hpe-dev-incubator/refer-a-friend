import React, { Component } from 'react';
import { Box, Text, FormField, Button, TextInput, Paragraph, Layer } from 'grommet';
import { Close } from 'grommet-icons';
import { Header } from './styles';

class SubmissionsManager extends Component {
  constructor() {
    super();
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
    this.onSubmit = this.onSubmit.bind(this);

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
    if(label === 'first') {
      this.setState({ firstName: name });
    }else{
      this.setState({ lastName: name });
    }
  }
  /* Handlers to open and close modal */
  onOpen() {
    this.setState({ modalOpen: true });
  }
  onClose() {
    this.setState({ modalOpen: false })
  }
  /* Handlers for submitting check-in and referrals */
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
    .then(response => console.log(response));
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
    .then(response => this.setState({ checkedIn: true }));
  }
  render() {
    const { error, checkedIn, modalOpen, email } = this.state;
    let layer;
    if(modalOpen) {
      layer = <ReferralForm email={email} onClose={this.onClose} error={error} onReferralChange={this.onReferralChange} onSubmit={this.onReferralSubmit} onNameChange={this.onNameChange} onEmailChange={this.onEmailChange}/>
    }
    return(
      <Box       
        background="neutral-1"
        basis="1/2"
        overflow="hidden"
      >
        {checkedIn ? <CheckedIn /> : <Checkin  error={error} onChange={this.onEmailChange} onSubmit={this.onSubmit}/>}
        <ReferAHacker checkedIn={checkedIn} onOpen={this.onOpen}/>
        {layer}
      </Box>
    )
  }
}

export default SubmissionsManager;

const Checkin = ({ error, onChange, onSubmit }) => (
  <Box 
  elevation="medium"
  pad={{ "top": "xsmall", "bottom": "large", "left": "large", "right": "large" }} 
  margin={{ "top": "xlarge" , "left": "xlarge", "right": "xlarge"}} 
  direction="column" 
  round="small" 
  background="white" 
  align="start"
  >
    <Header 
      margin={{ "top": "large", "bottom": "small" }}
    >
      Check-in
    </Header>
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
      <TextInput onChange={onChange} />
    </FormField>
    <Box 
      background="brand" 
      round="xsmall" 
      margin={{ "top": "medium" }}
    >
      <Button 
        fill={true} 
        margin={{ "top": "xsmall", "bottom": "xsmall" }}
        onClick={onSubmit}
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
)

const CheckedIn = () => (
  <Box
    pad={{ "top": "xsmall", "bottom": "large", "left": "large", "right": "large" }} 
    margin={{ "top": "xlarge" , "left": "large", "right": "medium"}} 
    direction="column" 
    align="start"
  >
    <Paragraph>We got you! You took your friend one step closer to winning a fantastic prize!</Paragraph>
    <Paragraph>Want to win your own prize? Refer 3 hackers to us.</Paragraph>
  </Box>
)

const ReferAHacker = ({ checkedIn, onOpen }) => (
  <Box
    align="start"
    margin={{ "top": "large", "left": "xlarge", "bottom": "small" }}
    background={checkedIn ? "white": "neutral-1"}
    round={{ "size": "small", "corner": "left" }}
    fill="horizontal"
  >
    <Header
      margin={{ "bottom": "small", "left": "large"}}
    >
      Refer a Hacker
    </Header>
      <Text 
        size="medium" 
        margin={{ "bottom": "medium", "left": "large" }}
      >
        Participate in our referral program to win great prizes.
      </Text>
      <Box 
      background="brand" 
      round="xsmall"
      margin={{ "bottom": "small", "left": "large" }} 
    >
      <Button 
        pad="small" 
        margin={{ "top": "small", "bottom": "small" }}
        onClick={onOpen}
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
);

const ReferralForm = ({ email, onClose, error, onReferralChange, onNameChange, onEmailChange, onSubmit }) => (
  <Layer
    modal={true}
    onEsc={onClose}
    position="right"
    flex={false}
  >
    <Box
      overflow="scroll"
    >
      <Button 
        icon={<Close />} 
        alignSelf="end"
        margin={{ "top": "small", "right": "large" }}
        onClick={onClose}
      ></Button>
      <Box
        margin={{ "left": "xlarge", "right": "xlarge", "bottom": 'xlarge' }}
        direction="column"
        align="start"
        flex={false}
      >
        <Header>Refer 3 Hackers By Email</Header>
        <FormField
          label="Email Address" 
          fill="horizontal"
          error={error}
        >
          <TextInput onChange={onReferralChange.bind(this, 0)} />
        </FormField>
        <FormField 
          label="Email Address" 
          fill="horizontal"
          error={error}
        >
          <TextInput onChange={onReferralChange.bind(this, 1)} />
        </FormField>
        <FormField 
          label="Email Address" 
          fill="horizontal"
          error={error}
        >
          <TextInput onChange={onReferralChange.bind(this, 2)} />
        </FormField>
        <Header margin={{ "bottom": "small" }}>How can we reach you?</Header>
        <Text margin={{ "bottom": "medium" }}>You want to win? Leave your email address too.</Text>
        <FormField
          label="First Name" 
          fill="horizontal"
          error={error}
        >
          <TextInput  onChange={onNameChange.bind(this, 'first')}/>
        </FormField>
        <FormField 
          label="Last Name" 
          fill="horizontal"
          error={error}
        >
          <TextInput  onChange={onNameChange.bind(this, 'last')}/>
        </FormField>
        <FormField 
          label="Email Address" 
          fill="horizontal"
          error={error}
        >
          <TextInput value={email} onChange={onEmailChange}/>
        </FormField>
        <Box 
          background="brand" 
          round="xsmall" 
          margin={{ "top": "medium" }}
        >
          <Button  
            margin={{ "top": "xsmall", "bottom": "xsmall" }}
            onClick={onSubmit}
          >
            <Text 
              size="xlarge" 
              weight="bold" 
              margin={{ "left": "large", "right": "large"}}
            >
              Submit
            </Text>
          </Button>
        </Box>
      </Box>
    </Box>
  </Layer>
)