import React from 'react';
import { Box, Text, Paragraph } from 'grommet';
import { Header, Hexagon } from './styles';
import SubmissionsManager from '../SubmissionsManager';

const Layout = () => (
  <Box direction="row">
    <Box 
      align="center" 
      directon="column" 
      basis="1/2"
    >
      <Box 
        alignSelf="start" 
        margin="medium" 
        direction="row"
      >
        <Hexagon margin={{ "right": "small" }}></Hexagon>
        <Text 
          size="medium" 
          margin={{ "right": "xsmall" }} 
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
      <Box>
        <Header 
          margin={{ "top": "xlarge", "bottom": "xsmall" }}
          color="light-1" 
        >
          Welcome to the Hack Shack
        </Header>
        <Paragraph
          margin={{ "top": "small" }}
          color="light-1"
        >
          Turnip greens yellow ricebean rutaba endive cauliflower sea lettuce kohlrabi amaranth water spincah avocado daikon napa cabbage asparagus winter purslane kale.
        </Paragraph>
      </Box>
      <Box>picture goes here</Box>
    </Box>
    <Box align="center" background="neutral-1" basis="1/2">
      <SubmissionsManager />
    </Box>
  </Box>
)

export default Layout;