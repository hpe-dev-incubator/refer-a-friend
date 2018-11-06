import React, { Component } from 'react';
import { Grommet } from 'grommet';
import { hpe } from 'grommet-theme-hpe';
import Layout from '../Layout';
import { Background } from './styles'

class App extends Component {
  render() {
    return (
      <Background>
        <Grommet theme={hpe}>
          <Layout />
        </Grommet>
      </Background>
    );
  }
}

export default App;