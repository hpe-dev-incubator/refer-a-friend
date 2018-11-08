import React from 'react';
import { Box } from 'grommet';
import SubmissionsManager from '../SubmissionsManager';
import EventDescription from '../EventDescription';

const Layout = () => (
  <Box overflow="hidden" direction="row">
    <EventDescription />
    <SubmissionsManager />
  </Box>
)

export default Layout;
