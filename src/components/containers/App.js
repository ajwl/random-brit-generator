import React, {Component} from 'react';
import engWales from '../../images/eng-wales.png';
import '../../styles/App.css';
import {getPeople} from '../../lib/generator.js';
import {List} from '../presentational/OutputList.js';
import {AreaButton} from '../presentational/AreaButton.js';
import NumberInput from './NumberInput.js';
import {SummaryBox} from '../presentational/SummaryBox';
import {Menu} from '../presentational/Menu';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [],
      numberPeople: 3,
      area: 'london'
    };
    this.handleNumberChange = this.handleNumberChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleGeographyChange = this.handleGeographyChange.bind(this);
  }

  handleGeographyChange(e){
    const geoArea = e.target.id;
    this.setState({area: geoArea });
  }

  handleNumberChange(e) {
    const numberInput = e.target.value;
    this.setState((prevState, props) => {
      return {numberPeople: numberInput};
      });
  };

  handleSubmit(e) {
    this.setState((state, props) => {
      return { people: getPeople(this.state.numberPeople, this.state.area) }
    });
    e.preventDefault();
  };

  render() {
    return (
      <div className="App generator">
        <Menu />
        <div className="App-header">
          <img src={engWales} className="App-top-image" alt="logo"/>
          <h2>Generate random Brits*</h2>
          <span>*According to demographic data from England & Wales 2011</span>
        </div>
        <div className="App-container">
          <AreaButton getArea={this.handleGeographyChange} isLondon={this.state.area === 'london'}/>
          <NumberInput onSubmit={this.handleSubmit}
            onChange={this.handleNumberChange}
            value ={this.state.numberPeople}
            onFocus = {this.state.handleClear}/>
          <List items={this.state.people} />
          <SummaryBox people={this.state.people} />
        </div>
      </div>
    );
  }
};

export default App;
