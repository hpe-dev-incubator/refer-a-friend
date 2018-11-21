import React from 'react';
import { Box, Paragraph, Anchor } from 'grommet';
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
        Participate in the Refer a Hacker challenge to win cool prizes! All you need to do is sign up here, refer three people to the Hack Shack to participate in a challenge. Once all three people have participated in a Hack Shack event and have checked in via this app you'll get an email notifying you to come pick up your awesome prize.
      </Paragraph>
      <Anchor 
        label="Check out the Hack Shack agenda" 
        href="https://content.attend.hpe.com/go/agendabuilder.sessions/?l=38&locale=en_US&AEID=&selectedFilters=tag_0:0,tag_217:3723&kw=hack%20shack"
        target="_blank"
        rel="nofollow noreferrer"
      />
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