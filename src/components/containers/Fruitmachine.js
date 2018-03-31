import React, {Component} from "react";
import face from '../../images/face.png';
import '../../styles/main.css';
import '../../styles/Machine.css';
import '../../styles/Machine-animation.css';
import Machine from './Machine.js';
import {getPeople, getCategories} from '../../lib/generator.js';
import {AreaButton} from '../presentational/AreaButton.js';
import {Menu} from '../presentational/Menu';
import {MachineList} from '../presentational/MachineList';

class Fruitmachine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gender: '',
      age: '',
      ethnicity: '',
      animationRunning: 'animationPaused',
      area: 'london',
      allPeople: []
    };
    this.runSpinner = this.runSpinner.bind(this);
    this.generatePerson = this.generatePerson.bind(this);
    this.ageCategories = getCategories('age');
    this.ethnicityCategories = getCategories('ethnicity');
    this.genderCategories = getCategories('gender');
    this.animationEnded = this.animationEnded.bind(this);
    this.handleAreaChange = this.handleAreaChange.bind(this);
    this.putPersonInList = this.putPersonInList.bind(this);
  }

  componentWillMount() {
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
    this.setState({animationRunning: 'animationPaused'});
    this.putPersonInList({gender: this.state.gender, age: this.state.age, ethnicity: this.state.ethnicity})
  }

  handleAreaChange(e) {
    let geoArea = e.target.id;
    this.setState({area: geoArea})
  }

  putPersonInList(prev){
    const {age, gender, ethnicity} = prev;
    const selectedPerson = {age, gender, ethnicity};
    const currentPeople = (this.state.allPeople);
    currentPeople.unshift(selectedPerson);
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

            <Machine gender={this.state.gender}
              age={this.state.age}
              ethnicity={this.state.ethnicity}
              ageCategories={this.ageCategories}
              genderCategories={this.genderCategories}
              ethnicityCategories={this.ethnicityCategories}
              rerunSpinner={this.runSpinner}
              animationEnded={this.animationEnded}
              animationRunning={this.state.animationRunning} />

            <MachineList people={this.state.allPeople} />

          </div>
        </div>
      </div>
    )
  }
}

export default Fruitmachine;
