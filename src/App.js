import React, { Component } from 'react';
import './App.css';
import Props from './components/React200/R017_Props';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Start React 200!</h1>
        <p>HTML 적용하기</p>
        <Props props_val="THIS IS PROPS"/>
      </div>
    );
  }
}

export default App;
