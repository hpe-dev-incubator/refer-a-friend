import React from 'react';
import { Box, Text, Heading, Button } from 'grommet';

const ThankYou = (props) => (
  <Box
    align="center"
    justify="center" 
    direction="column" 
    style={{ "backgroundColor": "rgb(56, 77, 92)" }}
  >
    <Heading color="white">
      Thank You!
    </Heading>
      <Box 
        background="brand" 
        round="xsmall"
        margin={{ "bottom": "small"}}
      >
        <Button 
          pad="small" 
          margin={{ "top": "xsmall", "bottom": "xsmall" }}
          onClick={() => props.history.push('/')}
        >
          <Text 
            size="xlarge" 
            weight="bold" 
            margin={{ "left": "large", "right": "large"}}
          >
            Go back
          </Text>
        </Button>
      </Box>
      <Box>Picture Goes here!</Box>
  </Box>
);

export default ThankYou;