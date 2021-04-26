import React, { Component } from 'react';
import './App.css';
import PropsObjVal from './components/React200/R020_PropsObjVal';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Start React 200!</h1>
        <p>HTML 적용하기</p>
        <PropsObjVal ObjectJson={{react:"리액트", twohundred:"200"}}/>
      </div>
    );
  }
}

export default App;
