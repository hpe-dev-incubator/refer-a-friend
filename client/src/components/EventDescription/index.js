import React from 'react';
import { Box, Paragraph } from 'grommet';
import { Heading } from './styles';
import GremlinWave from '../GremlinWave';
import Logo from '../Logo';

const EventDescription = () => (
  <Box
    background="dark-gray"
    basis="1/2"
    align="center"
    justify="between"
    directon="column"
  >
    <Logo />
    <Box
      margin={{ "top": "xlarge"}}
      pad="large"
    >
    <Box
    >
      <Heading>Welcome to the Hack Shack</Heading>
      <Paragraph
        size="large"
      >
        Turnip greens yellow ricebean rutaba endive cauliflower sea lettuce kohlrabi amaranth water spincah avocado daikon napa cabbage asparagus winter purslane kale.
      </Paragraph>
    </Box>
    </Box>
    <Box
      margin={{ "right": "xlarge" }}
    >
      <GremlinWave />
    </Box>
  </Box>
);

export default EventDescription;