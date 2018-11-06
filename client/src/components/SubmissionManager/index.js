import React, { Component } from 'react';
import { Box, Button, Paragraph, Layer, TextInput, Text } from 'grommet';
import { AddCircle, FormSubtract, Close } from 'grommet-icons'; 
import { Layout } from './styles';

class SubmissionManager extends Component {
  constructor(){
    super();
    this.state = {
      referrals: [],
      referrer: '',
      checkin: '',
      modalOpen: false
    };
    this.onModalOpen = this.onModalOpen.bind(this);
    this.onModalClose = this.onModalClose.bind(this);

    this.onReferralSubmit = this.onReferralSubmit.bind(this);
    this.onCheckinSubmit = this.onCheckinSubmit.bind(this);

    this.onReferrerChange = this.onReferrerChange.bind(this);
    this.onReferralChange = this.onReferralChange.bind(this);

    this.onAddReferralField = this.onAddReferralField.bind(this);
    this.onRemoveReferralField = this.onRemoveReferralField.bind(this);
  }
/* Handlers that open and close modal */
  onModalOpen() {
    this.setState({ modalOpen: true });
  }
  onModalClose() {
    this.setState({ modalOpen: false, referrals: [], referrer: ''});
  }
/* Handlers to add or remove text fields from layer */
  onAddReferralField() {
    const { referrals } = this.state;
    this.setState({ referrals: [...referrals, ''] })
  }
  onRemoveReferralField(index) {
    const { referrals } = this.state;
    referrals.splice(index, 1);
    this.setState({ referrals: referrals });
  }
/* Handler for refer-a-friend, and referrer text field changes */
  onReferralChange(index, event) {
    const text = event.target.value;
    const { referrals } = this.state;
    referrals[index] = text;
    this.setState({ referrals: referrals });
  }
  onReferrerChange(event) {
    const text = event.target.value;
    this.setState({ referrer: text });
  }
/* Handlers for referral and checkin for submit, sends data to API */
  onReferralSubmit() {
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
  }
  onCheckinSubmit() {
    console.log('Check-in!');
    const
  }
  render() {
    const { modalOpen, referrals, referrer } = this.state;
  /* Layer declaration and logic */
    let layer;
    if(modalOpen){
      layer = <FormLayer referrals={referrals} referrer={referrer} removeField={this.onRemoveReferralField} addField={this.onAddReferralField} onClose={this.onModalClose} onReferralChange={this.onReferralChange} onReferrerChange={this.onReferrerChange} onReferralSubmit={this.onReferralSubmit}/>
    }
    return(
      <Layout>
        <Box
          direction="row"
          justify="center" 
          align="center"
          fill={true}
        >
      {/* Refer-A-Friend Button */}
          <Box 
            border="all" 
            round="xsmall" 
            margin="small" 
            basis="small" 
            height="xsmall"
          >
            <Button 
              plain={true}
              fill={true} 
              onClick={this.onModalOpen} 
            >
              <Paragraph size="large" textAlign="center">Refer A Friend!</Paragraph>
            </Button>
          </Box>
        {/* Check-In Button */}
          <Box 
            border="all" 
            round="xsmall" 
            margin="small" 
            basis="small" 
            height="xsmall"
          >
            <Button 
              plain={true} 
              fill={true}
              onClick={this.onModalOpen} 
            >
              <Paragraph size="large" textAlign="center">Check-in!</Paragraph>
            </Button>
          </Box>
        </Box>
      {/* Layers */}
        {layer}
      </Layout>
    )
  }
}

export default SubmissionManager;

const FormLayer = ({onClose, onReferralSubmit, referrer, referrals, addField, removeField, onReferrerChange, onReferralChange}) => (
  <Layer
    modal={true}
    onEsc={onClose}
    position="right"
    full="vertical"
  >
    <Button alignSelf="start" onClick={onClose} icon={<Close />}></Button>
    <Box pad="large" justify="center" margin="small" direction="column">
      <Paragraph textAlign="center">Refer a Friend!</Paragraph>
      <Box>
        <TextInput onChange={onReferrerChange} value={referrer}></TextInput>
        <Text margin={{ "left": "small" }}>Your email</Text>
      </Box>
      {referrals.map((referral, index) => 
        <Box direction="row" key={index} margin="xsmall">
          <TextInput onChange={onReferralChange.bind(this, index)} value={referral}></TextInput>
          <Button onClick={removeField.bind(this, index)} style={{ padding: 2 }} icon={<FormSubtract />}></Button> 
        </Box>
      )}
      <Button onClick={addField} icon={<AddCircle />}></Button>
      <Box direction="row" justify="between">
        <Button label="Submit" onClick={onReferralSubmit}></Button>
        <Button label="Cancel" onClick={onClose}></Button>
      </Box>
    </Box>
  </Layer>
);