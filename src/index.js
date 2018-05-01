// @flow
import React                              from 'react';
import ReactDOM                           from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

/** State Manager **/
import store from './mainStore';

/** Components **/
import { App, Home } from './Components';

/** Modules **/
import registerServiceWorker from './registerServiceWorker';

/** Stylesheets **/
import './index.css';

ReactDOM.render(
  <Router>
    <App>
      <Route exact path="/"               render={() => <Home    store={store} />} />
    </App>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
