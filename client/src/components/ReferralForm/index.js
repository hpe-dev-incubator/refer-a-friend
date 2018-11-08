import React from 'react';
import { Layer, Box, Button, TextInput, FormField, Text } from 'grommet';
import { Close } from 'grommet-icons';
import { Header } from './styles'; 

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
      >
      </Button>
      <Box
        margin={{ "left": "xlarge", "right": "xlarge", "bottom": 'xlarge' }}
        direction="column"
        align="start"
        flex={false}
      >
        <Header>Refer 3 Hackers By Email</Header>
        <Box>
          <FormField
            label="Email Address" 
            fill="horizontal"
            error={error}
          >
            <TextInput onChange={onReferralChange.bind(this, 0)} />
          </FormField>
        </Box>
        <Box>
          <FormField 
            label="Email Address" 
            fill="horizontal"
            error={error}
          >
            <TextInput onChange={onReferralChange.bind(this, 1)} />
          </FormField>
        </Box>
        <Box>
          <FormField 
            label="Email Address" 
            fill="horizontal"
            error={error}
          >
            <TextInput onChange={onReferralChange.bind(this, 2)} />
          </FormField>
        </Box>
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
);

export default ReferralForm;