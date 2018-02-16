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
      gender: 'woman',
      age: '18-19',
      ethnicity: 'white',
      animate: '',
      agePos: 0,
      ethnicityPos: 0,
      genderPos: 0
    };
    this.rerunSpinner = this.rerunSpinner.bind(this);
    this.clearAnimation = this.clearAnimation.bind(this);
    this.getPosition = this.getPosition.bind(this);
    this.ageCategories = getCategories('age');
    this.ethnicityCategories = getCategories('ethnicity');
    this.genderCategories = getCategories('gender');
  }

  getPosition(chosenInput, categories ){
    const index = categories.indexOf(chosenInput);
    return index + 1;
  }

  rerunSpinner(){

    console.log(this.ageCategories)
    console.log(this.ethnicityCategories)
    console.log(this.genderCategories)

    const person = getPeople(1)[0];

    const agePosition = this.getPosition(person.age, this.ageCategories);
    const ethnicityPosition = this.getPosition(person.ethnicity, this.ethnicityCategories);
    const genderPosition = this.getPosition(person.gender, this.genderCategories);

    console.log("AGE POS", agePosition);
    console.log("gender POS", genderPosition);
    console.log("ethnicity POS", ethnicityPosition);

    this.setState({gender: person.gender});
    this.setState({age: person.age});
    this.setState({ethnicity: person.ethnicity});
    this.setState({animate: 'animate'});
    this.setState({agePos: agePosition});
    this.setState({ethnicityPos: ethnicityPosition});
    this.setState({genderPos: genderPosition});
  }

  clearAnimation(){
    this.setState({animate: ''});
  }

  render(){
    return(
      <div className="App">
        <Machine
          rerunSpinner={this.rerunSpinner}
          clearAnimation={this.clearAnimation}
          gender={this.state.gender}
          age={this.state.age}
          ethnicity={this.state.ethnicity}
          genderPos={this.state.genderPos}
          agePos={this.state.agePos}
          ethnicityPos={this.state.ethnicityPos}
          animate={this.state.animate}
          ageCategories={this.ageCategories}
          genderCategories={this.genderCategories}
          ethnicityCategories={this.ethnicityCategories}
        />
      </div>
    )
  }
}

export default Fruitmachine;
