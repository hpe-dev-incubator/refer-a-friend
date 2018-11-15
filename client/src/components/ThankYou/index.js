import React from 'react';
import { Box, Text, Heading, Button, Image } from 'grommet';
import GremlinWave from '../GremlinWave';

const ThankYou = (props) => (
  <Box
    align="center"
    direction="column" 
    justify="end"
    style={{ backgroundColor: "rgb(56, 77, 92)", minHeight: "100vh" }}
  >
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
    <Heading color="white">
      Thank You!
    </Heading>
      <Box 
        background="brand" 
        round="xsmall"
        margin={{ "bottom": "large"}}
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
      <GremlinWave />
  </Box>
);

export default ThankYou;