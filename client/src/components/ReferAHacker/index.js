import React from 'react';
import { Box, Text, Button, Paragraph } from 'grommet';
import { Heading } from './styles';

const ReferAHacker = ({ checkedIn, onOpen }) => (
  <Box
    direction="column"
    background={checkedIn ? "light-1" : "neutral-1"}
    round="small"
    margin={{ "top": "medium" }}
  >
    <Box
      align="start"
      pad="large"
    >
      <Heading
        margin={{ "bottom": "medium"}}
      >
        Refer a Hacker
      </Heading>
        <Text 
          margin={{ "bottom": "medium"}}
          size="large"
          color={checkedIn ? "neutral-3" : "light-1"} 
        >
          Participate in our referral program to win great prizes.
        </Text>
        <Box 
        background="brand" 
        round="xsmall"
        margin={{ "bottom": "small" }}
        pad={{ "left": "medium", "right": "medium", "top": "xsmall", "bottom": "xsmall" }} 
      >
        <Button 
          onClick={onOpen}
        >
          <Text 
            size="xlarge"
            weight="bold"
          >
            Refer a Hacker
          </Text>
        </Button>
      </Box>
    </Box>
  </Box>
);

export default ReferAHacker;