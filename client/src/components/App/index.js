import React, { Component } from 'react';
import { Box } from 'grommet';
import Layout from '../Layout';

class App extends Component {
  render() {
    return (
        <Box style={{minHeight: "100vh" }}>
          <Layout style={{flexGrow : 1}} history={this.props.history}/>
        </Box>
    );
  }
}

export default App;