import React from 'react';
import { Box, Text, FormField, TextInput, Button } from 'grommet';
import { Header } from './styles';

const CheckIn = ({ error, onChange, onSubmit }) => (
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
);

export default CheckIn;