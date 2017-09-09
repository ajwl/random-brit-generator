import React, {Component} from 'react';
import engWales from '../../images/eng-wales.png';
import '../../styles/App.css';
import {getPeople} from '../../lib/generator.js';
import {List} from '../presentational/OutputList.js';
import {InfoBox} from '../presentational/InfoBox.js';
import NumberInput from './NumberInput.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [],
      numberPeople: 3,
    };
    this.handleNumberChange = this.handleNumberChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={engWales} className="App-top-image" alt="logo"/>
          <h2>Generate random Brits*</h2>
          <span>*According to demographic data from Engand & Wales 2011</span>
        </div>
        <div className="App-container">
          <NumberInput onSubmit={this.handleSubmit}
            onChange={this.handleNumberChange}
            value ={this.state.numberPeople}
            onFocus = {this.state.handleClear}/>
          <List items={this.state.people} />
          <InfoBox value={this.state.numberPeople} />
        </div>
      </div>
    );
  }
};

export default App;
