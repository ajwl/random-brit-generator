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
    };
    this.rerunSpinner = this.rerunSpinner.bind(this);
  }

  rerunSpinner(){
    console.log('clicked this bloody hting');
    const person = getPeople(1);
    this.setState({gender: person.gender});
    this.setState({age: person.age});
    this.setState({ethnicity: person.ethnicity});
  }

  render(){
    return(
      <div className="App">
        <Machine
          rerunSpinner={this.state.rerunSpinner}
          gender={this.state.gender}
          age={this.state.age}
          ethnicity={this.state.ethnicity}
        />
      </div>
    )
  }
}

export default Fruitmachine;
