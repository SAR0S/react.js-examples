import React, { Component } from 'react';
import './App.css';
import PropsDatatype from './components/React200/R018_PropsDatatype';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Start React 200!</h1>
        <p>HTML 적용하기</p>
        <PropsDatatype
          String="react"
          Number={200}
          Boolean={1==1}
          Array={[0, 1, 8]}
          ObjectJson={{react : "리액트", twohundred : "200"}}
          Function={console.log('FunctionProps: function!')}
        />
      </div>
    );
  }
}

export default App;
