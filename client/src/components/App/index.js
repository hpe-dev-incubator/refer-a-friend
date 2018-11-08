import React, { Component } from 'react';
import { Grommet } from 'grommet';
import { hpe } from 'grommet-theme-hpe';
import Layout from '../Layout';

class App extends Component {
  render() {
    return (
        <Grommet theme={hpe}>
          <Layout />
        </Grommet>
    );
  }
}

export default App;