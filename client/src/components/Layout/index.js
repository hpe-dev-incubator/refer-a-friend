import React from 'react';
import { Box } from 'grommet';
import SubmissionsManager from '../SubmissionsManager';
import EventDescription from '../EventDescription';

const Layout = ({ history, ...rest }) => (
  <Box 
    overflow="hidden" 
    direction="row-responsive"
    {...rest}
  >
    <EventDescription />
    <SubmissionsManager history={history}/>
  </Box>
)

export default Layout;
