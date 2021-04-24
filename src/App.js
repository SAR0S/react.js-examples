import React, { Component } from 'react';
import './App.css';
import PropsBoolean from './components/React200/R019_PropsBoolean';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Start React 200!</h1>
        <p>HTML 적용하기</p>
        <PropsBoolean BooleanTrueFalse={false}/>
        <PropsBoolean BooleanTrueFalse/>
      </div>
    );
  }
}

export default App;
