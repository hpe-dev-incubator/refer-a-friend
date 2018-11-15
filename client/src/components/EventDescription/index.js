import React from 'react';
import { Box, Text, Paragraph, Image } from 'grommet';
import { Heading } from './styles';
import GremlinWave from '../GremlinWave';

const EventDescription = () => (
  <Box
    style={{ "backgroundColor": "rgb(56, 77, 92)" }}
    basis="1/2"
    align="center"
    justify="end"
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
    <Box
      directon="column"
    >
      <Box 
        margin="small"
      >
        <Heading 
          margin={{ "top": "xlarge", "bottom": "xsmall" }}
          color="light-1" 
        >
          Welcome to the Hack Shack
        </Heading>
        <Paragraph
          margin={{ "top": "small" }}
          color="light-1"
        >
          Turnip greens yellow ricebean rutaba endive cauliflower sea lettuce kohlrabi amaranth water spincah avocado daikon napa cabbage asparagus winter purslane kale.
        </Paragraph>
      </Box>
      <Box 
        margin={{ "top": "large" }}
      >
      </Box>
    </Box>
    <GremlinWave />
  </Box>
);

export default EventDescription;