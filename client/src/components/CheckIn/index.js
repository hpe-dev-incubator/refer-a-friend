import React from 'react';
import { Box, Text, Paragraph, FormField, TextInput, Button } from 'grommet';
import { Heading } from './styles';

const CheckIn = ({ errors, onChange, onSubmit }) => (
  <Box 
  margin={{ "top": "xlarge" , "left": "xlarge", "right": "xlarge"}}
  direction="column"
  round="small"
  background="light-1"
  pad="xxsmall"
  >
    <Box
      align="start"
      margin="large"
    >
      <Heading 
        margin={{ "bottom": "xsmall", "top": "xsmall" }}
      >
        Check-in
      </Heading>
      <Paragraph 
        color="neutral-2" 
        margin={{ "bottom": "small", "top": "xsmall" }}
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
  </Box>
);

export default CheckIn;