import React, { Component } from 'react';
import Layout from '../Layout';

class App extends Component {
  render() {
    return (
      <Layout history={this.props.history}/>
    );
  }
}

export default App;