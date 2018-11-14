import React from 'react';
import { Box, Text, Heading, Button, Image } from 'grommet';

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
      <Image src="images/hpe-dev-hexagon.svg"/>
      <Text 
        size="medium" 
        margin={{ "right": "xsmall", "left": "small" }} 
        weight="bold" 
        color="light-1" 
        alignSelf="start"
      >
        HPE
      </Text>
      <Text 
        size="medium" 
        color="light-1"
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
      <Image src="images/gremlin.svg"/>
  </Box>
);

export default ThankYou;