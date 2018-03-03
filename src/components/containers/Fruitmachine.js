import React, {Component} from "react";
import '../../styles/App.css';
import '../../styles/Machine.css';
import '../../styles/Machine-animation.css';
import Machine from './Machine.js';
import {getPeople, getCategories} from '../../lib/generator.js';

class Fruitmachine extends Component {
  constructor(props){
    super(props);
    this.state = {
      gender: '',
      age: '',
      ethnicity: '',

      prevGender: 'female',
      prevAge: '18-19',
      prevEthnicity: 'white',

      animate: '',
      animationRunning: false,
    };
    this.runSpinner = this.runSpinner.bind(this);
    this.ageCategories = getCategories('age');
    this.ethnicityCategories = getCategories('ethnicity');
    this.genderCategories = getCategories('gender');
    this.animationEnded = this.animationEnded.bind(this);
  }

  runSpinner(){

    const person = getPeople(1)[0];
    console.log(">>> The person is: ", person);
    console.log("THE ANIMATION STARTED!!!!!!!!");

    this.setState({gender: person.gender});
    this.setState({age: person.age});
    this.setState({ethnicity: person.ethnicity});
    this.setState({animate: 'animate'});

    // this.setState({prevGender: ''});
    // this.setState({prevAge: ''});
    // this.setState({prevEthnicity: ''});
    this.setState({animationRunning: true});

  }

  animationEnded(){
    console.log("THE ANIMATION ENDED!!!!!!!!");
    this.setState({prevGender: this.state.gender});
    this.setState({prevAge: this.state.age});
    this.setState({prevEthnicity: this.state.ethnicity});

    this.setState({animationRunning: false});
  }

  render(){
    return(
      <div className="App">
        <Machine
          gender={this.state.gender}
          age={this.state.age}
          ethnicity={this.state.ethnicity}

          prevGender={this.state.prevGender}
          prevAge={this.state.prevAge}
          prevEthnicity={this.state.prevEthnicity}

          ageCategories={this.ageCategories}
          genderCategories={this.genderCategories}
          ethnicityCategories={this.ethnicityCategories}

          rerunSpinner={this.runSpinner}
          animationEnded={this.animationEnded}
          animationRunning={this.state.animationRunning}
          animate={this.state.animate}

        />
      </div>
    )
  }
}

export default Fruitmachine;
