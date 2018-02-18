import React, {Component} from "react";
import ReactDOM from "react-dom"
import '../../styles/App.css';
import '../../styles/Machine.css';
import '../../styles/Machine-animation.css';
import Machine from './Machine.js';
import {getPeople, getCategories} from '../../lib/generator.js';

class Fruitmachine extends Component {
  constructor(props){
    super(props);
    this.state = {
      gender: 'Female',
      age: '18-19',
      ethnicity: 'White',
      animate: '',
    };
    this.rerunSpinner = this.rerunSpinner.bind(this);
    this.clearAnimation = this.clearAnimation.bind(this);
    this.ageCategories = getCategories('age');
    this.ethnicityCategories = getCategories('ethnicity');
    this.genderCategories = getCategories('gender');
  }


  rerunSpinner(){

    this.setState({animate: ''});
    // let mountNode = ReactDOM.findDOMNode(this.refs.machinebody);
    // ReactDOM.unmountComponentAtNode(mountNode);

    const person = getPeople(1)[0];

    this.setState({gender: person.gender});
    this.setState({age: person.age});
    this.setState({ethnicity: person.ethnicity});
    this.setState({animate: 'animate'});
  }

  clearAnimation(){
    this.setState({animate: ''});
  }

  render(){
    return(
      <div className="App">
        <Machine
          ref="machinebody"
          rerunSpinner={this.rerunSpinner}
          clearAnimation={this.clearAnimation}
          gender={this.state.gender}
          age={this.state.age}
          ethnicity={this.state.ethnicity}
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
