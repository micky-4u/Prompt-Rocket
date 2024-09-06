import React, { Component } from 'react';
import "./assets/css/index.css";

import Home from './pages/home.js';
import Header from './components/header/header.js'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Home />
      </div>
    );
  }
}

export default App;
