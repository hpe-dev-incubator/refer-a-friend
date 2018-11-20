import React from 'react';
import { Box, Paragraph } from 'grommet';

const CheckedIn = () => (
  <Box
    direction="column" 
    margin="xlarge"
  >
    <Box
      align="start"
    >
      <Paragraph 
        color="light-4"
        size="large"
      >
        We got you! You took your friend one step closer to winning a fantastic prize!
      </Paragraph>
      <Paragraph 
        color="light-4"
        size="large"
      >
        Want to win your own prize? Refer 3 hackers to us.
      </Paragraph>
    </Box>
  </Box>
);

export default CheckedIn;