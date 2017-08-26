import React, {Component} from 'react';
import logo from '../images/logo.svg';
import '../styles/App.css';
import {getPeople} from '../lib/generator.js';
import {List} from './OutputList.js';
import {NumberInput} from './NumberInput.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [],
      numberPeople: '',
    };
    this.handleNumberChange = this.handleNumberChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNumberChange(e) {
    console.log("this fired");
    const numberInput = e.target.value;
    this.setState((prevState, props) => {
      return {numberPeople: numberInput};
      });
  };

  handleSubmit(e) {
    this.setState((state, props) => {
      return { people: getPeople(this.state.numberPeople) }
    });
    e.preventDefault();
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h2>Who are the people?</h2>
        </div>
        <NumberInput onSubmit={this.handleSubmit} onChange={this.handleNumberChange} value ={this.state.numberPeople} />
        <List items={this.state.people} />
      </div>
    );
  }
}

export default App;
