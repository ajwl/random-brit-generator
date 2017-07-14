import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {getPeople} from './generator.js';

const people = getPeople(3);

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Who are the people?</h2>
        </div>
        <ul className="App-intro">
          {people.map((person) => {
            return <li>{person['gender']} + {person.age} + {person.ethnicity}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default App;
