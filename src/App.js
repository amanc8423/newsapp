import './App.css';
import Navbar from './components/Navbar';

import React, { Component } from 'react'
import News from './components/News';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <News/>
      </div>
    )
  }
}

//dc2d143ce2c24df2be69a802680517c1