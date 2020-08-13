import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './bootstrap.min.css'

class App extends Component {
  render(){
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div onClick={this.props.onTextClicked}>click text to increment count {this.props.clicks} times</div>
      </header>
    </div>
   );
  }

}

export default App;
