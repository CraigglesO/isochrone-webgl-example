// @flow
import React, { Component } from 'react';
// import { observer }         from 'mobx-react';

/** Stylesheets **/
import './App.css';

/** Types **/
type State = {}
type Props = {
  children: any;
}

class App extends Component {
  state: State;
  props: Props;
  render() {
    const { children } = this.props;
    return (
      <div className="App">
        {children}
      </div>
    );
  }
}

export default App;
