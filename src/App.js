import React, { Component } from 'react';
import './App.css';
import LifecycleEx from './components/React200/R006_LifecycleEx.js';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Start React 200!</h1>
        <p>HTML 적용하기</p>
        <LifecycleEx
          prop_value = 'FromApp.js' 
        />
      </div>
    );
  }
}

export default App;
