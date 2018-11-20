import React from 'react';
import { Box, Text, Button} from 'grommet';
import { Heading } from './styles'
import GremlinWave from '../GremlinWave';
import Logo from '../Logo';

const ThankYou = (props) => (
  <Box
    direction="column" 
    justify="between"
    background="dark-gray"
    align="center"
  >
    <Logo />
    <Box
      margin="xlarge"
      pad="large"
      align="center"
    >
      <Heading
        margin={{ "bottom": "large" }}
      >
        Thank you
      </Heading>
      <Box 
        background="brand"
        alignSelf="center" 
        round="xsmall"
        margin={{ "top": "medium" }}
        pad={{ "top": "small", "bottom": "small", "left": "medium", "right": "medium" }}
      >
        <Button 
          onClick={() => props.history.push('/')}
        >
          <Text 
            size="xlarge" 
            weight="bold"
            margin="large" 
          >
            Go back
          </Text>
        </Button>
      </Box>
    </Box>
      <Box
        margin={{ "right": "xlarge"}}
      >
        <GremlinWave />
      </Box>
  </Box>
);

export default ThankYou;