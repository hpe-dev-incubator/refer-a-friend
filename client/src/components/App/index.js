import React, { Component } from 'react';
import { FullScreen } from './styles';
import Layout from '../Layout';

class App extends Component {
  render() {
    return (
        <FullScreen>
          <Layout  history={this.props.history}/>
        </FullScreen>
    );
  }
}

export default App;