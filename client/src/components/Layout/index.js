import React from 'react';
import { Box } from 'grommet';
import SubmissionsManager from '../SubmissionsManager';
import EventDescription from '../EventDescription';

const Layout = (props) => (
  <Box overflow="hidden" direction="row">
    <EventDescription />
    <SubmissionsManager history={props.history}/>
  </Box>
)

export default Layout;
