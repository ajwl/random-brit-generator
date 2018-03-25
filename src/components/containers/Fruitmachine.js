import React, {Component} from "react";
import face from '../../images/face.png';
import '../../styles/main.css';
import '../../styles/Machine.css';
import '../../styles/Machine-animation.css';
import Machine from './Machine.js';
import {getPeople, getCategories} from '../../lib/generator.js';
import {AreaButton} from '../presentational/AreaButton.js';
import {Menu} from '../presentational/Menu';

class Fruitmachine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gender: '',
      age: '',
      ethnicity: '',
      prevGender: 'Female',
      prevAge: '18-19',
      prevEthnicity: 'White',
      animationRunning: 'animationPaused',
      area: ''
    };
    this.runSpinner = this.runSpinner.bind(this);
    this.generatePerson = this.generatePerson.bind(this);
    this.ageCategories = getCategories('age');
    this.ethnicityCategories = getCategories('ethnicity');
    this.genderCategories = getCategories('gender');
    this.animationEnded = this.animationEnded.bind(this);
    this.handleAreaChange = this.handleAreaChange.bind(this);
  }

  componentWillMount() {
    this.generatePerson();
    this.setState({animationRunning: 'animationRunning'});
  }

  runSpinner() {
    this.generatePerson();
    console.log("ANIMATION STARTED");
    this.setState({animationRunning: 'animationRunning'});
  }

  generatePerson() {
    const person = getPeople(1, this.state.area)[0];
    this.setState({gender: person.gender});
    this.setState({age: person.age});
    this.setState({ethnicity: person.ethnicity});
  }

  animationEnded() {
    console.log("THE ANIMATION ENDED!!!!!!!!");
    this.setState({prevGender: this.state.gender});
    this.setState({prevAge: this.state.age});
    this.setState({prevEthnicity: this.state.ethnicity});

    this.setState({animationRunning: 'animationPaused'});
  }

  handleAreaChange(e) {
    let geoArea = e.target.id;
    this.setState({area: geoArea})
  }

  render() {
    return (
      <div className="App fruitmachine">
        <Menu/>
        <div className="content">
          <div className="App-header">
            <img src={face} className="App-top-image" alt="logo"/>
            <h2>Intersectionality fruitmachine</h2>
            <span>*According to demographic data from England & Wales 2011</span>
          </div>
          <div className="App-container">
            <AreaButton getArea={this.handleAreaChange} isLondon={this.state.area === 'london'}/>
            <Machine gender={this.state.gender} age={this.state.age} ethnicity={this.state.ethnicity} prevGender={this.state.prevGender} prevAge={this.state.prevAge} prevEthnicity={this.state.prevEthnicity} ageCategories={this.ageCategories} genderCategories={this.genderCategories} ethnicityCategories={this.ethnicityCategories} rerunSpinner={this.runSpinner} animationEnded={this.animationEnded} animationRunning={this.state.animationRunning}/>
          </div>
        </div>
      </div>
    )
  }
}

export default Fruitmachine;
