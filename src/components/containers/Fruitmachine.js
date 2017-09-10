import React, {Component} from "react";
import '../../styles/App.css';
import '../../styles/Machine.css';
import Machine from '../presentational/Machine';
import {getPeople} from '../../lib/generator.js';

class Fruitmachine extends Component {
  constructor(props){
    super(props);
    this.state = {
      gender: 'woman',
      age: '30-35',
      ethnicity: 'black',
      animate: '',
    };
    this.rerunSpinner = this.rerunSpinner.bind(this);
    this.clearAnimation = this.clearAnimation.bind(this);
  }

  rerunSpinner(){
    const person = getPeople(1)[0];
    this.setState({gender: person.gender});
    this.setState({age: person.age});
    this.setState({ethnicity: person.ethnicity});
    this.setState({animate: 'animate'});
  }

  clearAnimation(){
    console.log('this ran')
    this.setState({animate: 'slow-to-end'});
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
          animate={this.state.animate}
        />
      </div>
    )
  }
}

export default Fruitmachine;
