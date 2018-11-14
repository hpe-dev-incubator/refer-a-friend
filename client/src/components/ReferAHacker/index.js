import React from 'react';
import { Box, Text, Button } from 'grommet';
import { Heading } from './styles';

const ReferAHacker = ({ checkedIn, onOpen }) => (
  <Box
    align="start"
    margin={{ "top": "large", "left": "xlarge", "bottom": "small", "right": "xlarge" }}
    background={checkedIn ? "white": "neutral-1"}
    round={{ "size": "small", "corner": "left" }}
  >
    <Heading
      margin={{ "bottom": "small", "left": "large"}}
    >
      Refer a Hacker
    </Heading>
      <Text 
        size="medium" 
        margin={{ "bottom": "medium", "left": "large" }}
      >
        Participate in our referral program to win great prizes.
      </Text>
      <Box 
      background="brand" 
      round="xsmall"
      margin={{ "bottom": "small", "left": "large" }} 
    >
      <Button 
        pad="small" 
        margin={{ "top": "small", "bottom": "small" }}
        onClick={onOpen}
      >
        <Text 
          size="xlarge" 
          weight="bold" 
          margin={{ "left": "medium", "right": "medium"}}
        >
          Refer a Hacker
        </Text>
      </Button>
    </Box>
  </Box>
);

export default ReferAHacker;