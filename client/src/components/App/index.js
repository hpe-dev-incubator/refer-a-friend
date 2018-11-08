import React, { Component } from 'react';
import { Box } from 'grommet';
import Layout from '../Layout';

class App extends Component {
  render() {
    return (
        <Box>
          <Layout history={this.props.history}/>
        </Box>
    );
  }
}

export default App;