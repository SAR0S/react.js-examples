import React, { Component } from 'react';
import './App.css';
import ImportComponent from './components/React200/R003_ImportComponent.js';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Start React 200!</h1>
        <p>HTML 적용하기</p>
        <ImportComponent></ImportComponent>
      </div>
      );
  }
}

export default App;
