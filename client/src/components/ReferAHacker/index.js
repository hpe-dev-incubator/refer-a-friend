import React from 'react';
import { Box, Text, Button } from 'grommet';
import { Header } from './styles';

const ReferAHacker = ({ checkedIn, onOpen }) => (
  <Box
    align="start"
    margin={{ "top": "large", "left": "xlarge", "bottom": "small" }}
    background={checkedIn ? "white": "neutral-1"}
    round={{ "size": "small", "corner": "left" }}
    fill="horizontal"
  >
    <Header
      margin={{ "bottom": "small", "left": "large"}}
    >
      Refer a Hacker
    </Header>
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