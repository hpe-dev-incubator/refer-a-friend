import React from 'react';
import { Layer, Box, Button, TextInput, FormField, Text, Paragraph } from 'grommet';
import { Close } from 'grommet-icons';
import { Heading } from './styles'; 

const ReferralForm = ({ email, firstName, lastName, onClose, errors, onReferralChange, onNameChange, onEmailChange, onSubmit}) => (
  <Layer
    modal={true}
    onEsc={onClose}
    position="right"
    full="vertical"
  >
    <Box
      fill={true}
      background="light-1"
      overflow="auto"
      round={{ "size": "small", "corner": "left"}}
    >
      <Box
        flex={false}
        alignSelf="end"
      >
        <Button 
          icon={<Close color="brand" />} 
          onClick={onClose}
          margin="small"
        >
        </Button>
      </Box>
      <Box
        flex={false}
        margin={{ "left": "large", "right": "large" }}
        direction="column"
        align="start"
      >
        <Heading
          margin={{ "bottom": "large"}}
        >
          Refer 3 Hackers By Email
        </Heading>
        <FormField
          label="Email Address" 
          fill="horizontal"
          error={errors.ref[0]}
        >
          <TextInput onChange={onReferralChange.bind(this, 0)} />
        </FormField>
        <FormField 
          label="Email Address" 
          fill="horizontal"
          error={errors.ref[1]}
        >
          <TextInput onChange={onReferralChange.bind(this, 1)} />
        </FormField>
        <FormField 
          label="Email Address"
          fill="horizontal"
          error={errors.ref[2]}
        >
          <TextInput onChange={onReferralChange.bind(this, 2)} />
        </FormField>
        <Text
          size="xlarge"
          margin={{ "top": "large", "bottom": "small"}}
        >
          How can we reach you?
        </Text>
        <Text 
          size="large"
          color="neutral-2" 
          margin={{ "bottom": "medium"}}
        >
          You want to win? Leave your email address too.
        </Text>
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
          margin={{ "bottom": "xlarge", "top": "medium" }}
          pad={{ "left": "large", "right": "large", "top": "xsmall", "bottom": "xsmall" }}
        >
          <Button
            onClick={onSubmit}
          >
            <Text 
              size="xlarge" 
              weight="bold" 
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