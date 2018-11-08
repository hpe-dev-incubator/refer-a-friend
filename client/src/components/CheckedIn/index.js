import React from 'react';
import { Box, Paragraph } from 'grommet';

const CheckedIn = () => (
  <Box
    pad={{ "top": "xsmall", "bottom": "large", "left": "large", "right": "large" }} 
    margin={{ "top": "xlarge" , "left": "large", "right": "medium"}} 
    direction="column" 
    align="start"
  >
    <Paragraph>We got you! You took your friend one step closer to winning a fantastic prize!</Paragraph>
    <Paragraph>Want to win your own prize? Refer 3 hackers to us.</Paragraph>
  </Box>
);

export default CheckedIn;