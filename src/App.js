import React, { Component } from 'react';
import './App.css';
import ScrollBox from './components/scrollBox/ScrollBox.js';

class App extends Component {
  render() {
    return (
      <div>
        <ScrollBox ref={(ref) => this.scrollBox=ref}/>
        <button onClick={() => this.scrollBox.scrollToBottom()}>
          맨 밑으로
        </button>
      </div>
      );
  }
}

export default App;
