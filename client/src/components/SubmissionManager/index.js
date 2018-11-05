import React, { Component } from 'react';
import { Box, Button, Paragraph, Layer, TextInput } from 'grommet';
import { Layout } from './styles';

class SubmissionManager extends Component {
  constructor(){
    super();
    this.state = {
      referrals: ['Sardu', 'Bolivar', 'Goodweather'],
      referrer: 'Setrakian',
      checkin: 'Fet',
      modalOpen: false
    };
    this.onReferralSubmit = this.onReferralSubmit.bind(this);
    this.onCheckinSubmit = this.onCheckinSubmit.bind(this);
    this.onModalOpen = this.onModalOpen.bind(this);
    this.onModalClose = this.onModalClose.bind(this);
  }
/* Open and close modal handlers  */
  onModalOpen(event) {
    this.setState({ modalOpen: true });
  }
  onModalClose(event) {
    this.setState({ modalOpen: false});
  }
  onReferralSubmit(event) {
    console.log('Referral!');
    fetch('/api/refer-a-friend', {
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
    console.log('Check-in!');
  }
  render() {
    const { modalOpen } = this.state;
    let layer;
    if(modalOpen){
      layer = <FormLayer onClose={this.onModalClose}/>
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

const FormLayer = ({onClose}) => (
  <Layer
    modal={true}
    onClickOutside={onClose}
    onEsc={onClose}
    position="right"
    full="vertical"
  >
    <Box>
      <TextInput>

      </TextInput>
    </Box>
  </Layer>
);