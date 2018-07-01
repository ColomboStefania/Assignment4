import React, { Component } from 'react';
import PizzaList from './components/PizzaList'
import SauceSelected from './components/SauceSelected'
import ToppingSelected from './components/ToppingSelected'
import Drone from './components/Drone'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1> Welcome to the Pizza Configurator</h1>
      <PizzaList />
      <SauceSelected />
      <ToppingSelected />
      <Drone />
      </div>
    );
  }
}

export default App;
