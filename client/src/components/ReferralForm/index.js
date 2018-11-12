import React from 'react';
import { Layer, Box, Button, TextInput, FormField, Text } from 'grommet';
import { Close } from 'grommet-icons';
import { Header } from './styles'; 

const ReferralForm = ({ email, firstName, lastName, onClose, errors, onReferralChange, onNameChange, onEmailChange, onSubmit}) => (
  <Layer
    modal={true}
    onEsc={onClose}
    position="right"
  >
    <Box
      overflow="scroll"
      background="light-1"
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
        <FormField
          label="Email Address" 
          fill="horizontal"
          error={errors.ref0}
        >
          <TextInput onChange={onReferralChange.bind(this, 0)} />
        </FormField>
        <FormField 
          label="Email Address" 
          fill="horizontal"
          error={errors.ref1}
        >
          <TextInput onChange={onReferralChange.bind(this, 1)} />
        </FormField>
        <FormField 
          label="Email Address" 
          fill="horizontal"
          error={errors.ref2}
        >
          <TextInput onChange={onReferralChange.bind(this, 2)} />
        </FormField>
        <Header margin={{ "bottom": "small" }}>How can we reach you?</Header>
        <Text margin={{ "bottom": "medium" }}>You want to win? Leave your email address too.</Text>
        <FormField
          label="First Name" 
          fill="horizontal"
          error={errors.firstName}
        >
          <TextInput value={firstName} onChange={onNameChange.bind(this, 'first')}/>
        </FormField>
        <FormField 
          label="Last Name" 
          fill="horizontal"
          error={errors.lastName}
        >
          <TextInput value={lastName} onChange={onNameChange.bind(this, 'last')}/>
        </FormField>
        <FormField 
          label="Email Address" 
          fill="horizontal"
          error={errors.emailRefer}
        >
          <TextInput  value={email} onChange={onEmailChange}/>
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