import React from 'react';
import { Box, Text, Button } from 'grommet';
import { Heading } from './styles';

const ReferAHacker = ({ checkedIn, onOpen }) => (
  <Box
    align="start"
    pad={{ "top": "medium", "bottom": "medium", "left": "large", "right": "large"}}
    margin={{ "top": "large", "left": "xlarge", "right": "xlarge" }}
    background={checkedIn ? "white" : "neutral-1"}
    round="small"
    
  >
    <Heading
      margin={{ "bottom": "small" }}
    >
      Refer a Hacker
    </Heading>
      <Text 
        size="medium" 
        margin={{ "bottom": "medium"}}
      >
        Participate in our referral program to win great prizes.
      </Text>
      <Box 
      background="brand" 
      round="xsmall"
      margin={{ "bottom": "medium"}}
    >
      <Button 
        pad="small" 
        margin={{ "top": "xsmall", "bottom": "xsmall" }}
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