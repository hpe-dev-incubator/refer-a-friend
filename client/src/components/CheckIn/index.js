import React from 'react';
import { Box, Text, Paragraph, FormField, TextInput, Button } from 'grommet';
import { Heading } from './styles';

const CheckIn = ({ errors, onChange, onSubmit }) => (
  <Box 
    direction="column"
    round="small"
    background="light-1"
  >
    <Box
      align="start"
      pad="large"
    >
      <Heading 
      >
        Check-in
      </Heading>
      <Paragraph 
        color="neutral-3"
        size="large"
        margin={{ "right": "xlarge" }} 
      >
        A friend referred you to us? Check in now.
      </Paragraph>
      <FormField 
        label="Email Address" 
        fill={true}
        error={errors}
        margin={{ "bottom": "large" }}
      >
        <TextInput onChange={onChange} />
      </FormField>
      <Box 
        background="brand" 
        round="xsmall"
        margin={{ "bottom": "small" }}
        pad={{ "left": "large", "right": "large", "top": "xsmall", "bottom": "xsmall" }}
        style={{"minHeight": "auto"}}
      >
        <Button 
          onClick={onSubmit}
        >
          <Text 
            size="xlarge" 
            weight="bold" 
          >
            Check in
          </Text>
        </Button>
      </Box>
    </Box>
  </Box>
);

export default CheckIn;