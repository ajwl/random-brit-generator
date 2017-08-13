import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {getPeople} from './generator.js';
import NumberInput from './NumberInput.js'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {numberPeople: 3, people: ''};
    this.handleNumberChange = this.handleNumberChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNumberChange(e){
    this.setState({ numberPeople: e.target.value });
  };

  handleSubmit(e){
    this.setState((prevState, props) => {
    return {
      numberPeople: getNumberPeople(prevState.numberPeople)
    } });
    e.preventDefault();
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Who are the people?</h2>
        </div>
        <form onSubmit={this.handleSubmit} className="input-number">
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          <input type="submit" value="Get People" />
        </form>
        <ul className="App-intro">
          {this.state.people.map((person) => {
            return <li>{person['gender']} + {person.age} + {person.ethnicity}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default App;
