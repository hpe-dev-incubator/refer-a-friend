import React from 'react';
import { Box, Image, Text } from 'grommet';

const Logo = () => (
  <Box 
  alignSelf="start" 
  margin="medium" 
  direction="row"
  >
    <Image src="images/hpe-dev-logo.svg"/>
    <Text 
      size="xlarge" 
      margin={{ "right": "xsmall", "left": "small" }} 
      weight="bold" 
      color="light-1" 
      alignSelf="center"
    >
      HPE
    </Text>
    <Text 
      size="xlarge" 
      color="light-1"
      alignSelf="center"
    >
      Developer
    </Text>
  </Box>
);

export default Logo;