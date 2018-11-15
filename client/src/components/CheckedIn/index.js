import React from 'react';
import { Box, Paragraph } from 'grommet';

const CheckedIn = () => (
  <Box
    pad={{ "top": "xsmall", "bottom": "large", "left": "large", "right": "large" }} 
    margin={{ "top": "small" , "bottom": "medium", "left": "xlarge", "right": "xlarge"}} 
    direction="column" 
    align="start"
  >
    <Paragraph color="light-4">We got you! You took your friend one step closer to winning a fantastic prize!</Paragraph>
    <Paragraph color="light-4">Want to win your own prize? Refer 3 hackers to us.</Paragraph>
  </Box>
);

export default CheckedIn;