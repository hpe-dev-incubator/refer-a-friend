import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './components/App';
import hpe from './theme'
import { Grommet } from 'grommet';
import ThankYou from './components/ThankYou';

ReactDOM.render(
  <BrowserRouter>
    <Grommet theme={hpe}>
      <Route exact path='/' component={App}  />
      <Route path='/thankyou' component={ThankYou} />
    </Grommet>
  </BrowserRouter>, 
  document.getElementById('root')
  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
