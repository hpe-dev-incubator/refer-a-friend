import React from 'react';
import { Box, Text, Paragraph, FormField, TextInput, Button } from 'grommet';
import { Heading } from './styles';

const CheckIn = ({ errors, onChange, onSubmit }) => (
  <Box 
  pad={{ "top": "xsmall", "bottom": "large", "left": "large", "right": "large" }} 
  margin={{ "top": "xlarge" , "left": "xlarge", "right": "xlarge"}} 
  direction="column"
  round="small"
  background="light-1"
  align="start"
  >
    <Heading 
      margin={{ "top": "large", "bottom": "small" }}
    >
      Check-in
    </Heading>
    <Paragraph 
      color="neutral-2" 
      margin={{ "bottom": "small" }}
    >
      A friend referred you to us? Check in now.
    </Paragraph>
    <FormField 
      label="Email Address" 
      fill={true}
      error={errors}
    >
      <TextInput onChange={onChange} />
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
          Check in
        </Text>
      </Button>
    </Box>
  </Box>
);

export default CheckIn;