import React, {Component} from 'react';
import logo from '../images/logo.svg';
import '../styles/App.css';
import {getPeople} from '../lib/generator.js';
import {List} from './OutputList.js';
import {InfoBox} from './InfoBox.js';
import NumberInput from './NumberInput.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [],
      numberPeople: '0',
    };
    this.handleNumberChange = this.handleNumberChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  handleNumberChange(e) {
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

  handleClear(e) {
    console.log("this fired");
    this.setState((prevState, props) => {
      return {numberPeople: '0'};
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h2>Who are the people?</h2>
        </div>
        <div className="App-container">
          <NumberInput onSubmit={this.handleSubmit}
            onChange={this.handleNumberChange}
            value ={this.state.numberPeople}
            onClick = {this.state.handleClear}/>
          <List items={this.state.people} />
          <InfoBox value={this.state.numberPeople} />
        </div>
      </div>
    );
  }
};

export default App;
