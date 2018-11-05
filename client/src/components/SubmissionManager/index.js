import React, { Component } from 'react';
import { Box, Button, Paragraph, Layer, TextInput, Text } from 'grommet';
import { AddCircle, FormSubtract } from 'grommet-icons'; 
import { Layout } from './styles';

class SubmissionManager extends Component {
  constructor(){
    super();
    this.state = {
      referrals: [],
      referrer: 'Setrakian',
      checkin: 'Fet',
      modalOpen: false
    };
    this.onReferralSubmit = this.onReferralSubmit.bind(this);
    this.onCheckinSubmit = this.onCheckinSubmit.bind(this);
    this.onModalOpen = this.onModalOpen.bind(this);
    this.onModalClose = this.onModalClose.bind(this);
    this.onAddReferralField = this.onAddReferralField.bind(this);
    this.onRemoveReferralField = this.onRemoveReferralField.bind(this);
    this.onChange = this.onChange.bind(this);
  }
/* Handlers that open and close modal */
  onModalOpen() {
    this.setState({ modalOpen: true });
  }
  onModalClose() {
    this.setState({ modalOpen: false});
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
  onChange(index, event) {
    const text = event.target.value;
    const { referrals } = this.state;
    referrals[index] = text;
    this.setState({ referrals: referrals });
  }
  onReferralSubmit() {
    console.log('Referral!');
    fetch('/api/refer-a-friend', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ referrer: this.state.referrer, referrals: this.state.referrals })
    })
    .then(response => console.log(response))
  }
  onCheckinSubmit() {
    console.log('Check-in!');
  }
  render() {
    const { modalOpen, referrals } = this.state;
    let layer;
    if(modalOpen){
      layer = <FormLayer referrals={referrals} removeField={this.onRemoveReferralField} addField={this.onAddReferralField} onClose={this.onModalClose} onChange={this.onChange}/>
    }
    return(
      <Layout>
        <Box
          direction="row"
          justify="center" 
          align="center"
          fill={true}
        >
          <Box border="all" margin="small" basis="small" height="xsmall">
            <Button 
              plain={true}
              fill={true} 
              onClick={this.onModalOpen} 
            >
              <Paragraph size="large" textAlign="center">Refer A Friend!</Paragraph>
            </Button>
          </Box>
          <Box border="all" margin="small" basis="small" height="xsmall">
            <Button 
              plain={true} 
              fill={true}
              onClick={this.onModalOpen} 
            >
              <Paragraph size="large" textAlign="center">Check-in!</Paragraph>
            </Button>
          </Box>
        </Box>
        {layer}
      </Layout>
    )
  }
}

export default SubmissionManager;

const FormLayer = ({onClose, referrals, addField, removeField, onChange}) => (
  <Layer
    modal={true}
    onClickOutside={onClose}
    onEsc={onClose}
    position="right"
    full="vertical"
  >
    <Box justify="center" margin="small" direction="column">
      <Paragraph textAlign="center">Refer a Friend!</Paragraph>
      <Box>
        <TextInput></TextInput>
        <Text margin={{ "left": "small" }}>Your email</Text>
      </Box>
      {referrals.map((referral, index) => 
        <Box direction="row" key={index} margin="xsmall">
          <TextInput onChange={onChange.bind(this, index)} value={referral}></TextInput>
          <Button onClick={removeField.bind(this, index)} style={{ padding: 0 }} icon={<FormSubtract />}></Button> 
        </Box>
      )}
      <Button onClick={addField} icon={<AddCircle />}></Button>
    </Box>
  </Layer>
);