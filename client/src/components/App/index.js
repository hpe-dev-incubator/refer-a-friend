import React, { Component } from 'react';
import { Grommet } from 'grommet';
import grommet from './theme';
import SubmissionManager from '../SubmissionManager';

class App extends Component {
  render() {
    return (
      <Grommet theme={grommet}>
        <SubmissionManager />
      </Grommet>
    );
  }
}

export default App;