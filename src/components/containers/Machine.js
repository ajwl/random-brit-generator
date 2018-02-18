import React, {Component} from "react";
import Spinner from '../presentational/Spinner';
import {getPosition} from '../../lib/getPositions';

class Machine extends Component {
  constructor(props){
    super(props);
    this.state = {
      ageDeg: -10,
      ethnicityDeg: -10,
      genderDeg: -10,
    };
    this.calculateDegree = this.calculateDegree.bind(this);
    this.positionToDegree = this.positionToDegree.bind(this);
  }

  componentWillReceiveProps(){
    this.calculateDegree();
  }

  calculateDegree (){

    console.log("In Machine props are:", this.props)

    const agePosition = getPosition(this.props.age, this.props.ageCategories);
    const ethnicityPosition = getPosition(this.props.ethnicity, this.props.ethnicityCategories);
    const genderPosition = getPosition(this.props.gender, this.props.genderCategories);

    const ageDegree = this.positionToDegree(agePosition);
    const ethnicityDegree = this.positionToDegree(ethnicityPosition);
    const genderDegree = this.positionToDegree(genderPosition);

    this.setState({'ageDeg': ageDegree})
    this.setState({'ethnicityDeg': ethnicityDegree})
    this.setState({'genderDeg': genderDegree})
  }

  positionToDegree(pos){
    const deg = pos !== 0 ? (pos * 36) : 0;
    return deg; // number of degrees for each option, ie 360 deg / 10 options
  }

  render(){
    return (
      <div className="machine">
        <h2> Intersectionality fruitmachine</h2>
        <Spinner
          animate={this.props.animate}
          age={this.props.age}
          ethnicity={this.props.ethnicity}
          gender={this.props.gender}
          ageCategories={this.props.ageCategories}
          genderCategories={this.props.genderCategories}
          ethnicityCategories={this.props.ethnicityCategories}

          ageDeg={this.state.ageDeg}
          ethnicityDeg={this.state.ethnicityDeg}
          genderDeg={this.state.genderDeg}
        />
        <div className="buttons">
          <button onClick={this.props.rerunSpinner}>Run the machine</button>
          <button onClick={this.props.clearAnimation}>Stop the machine</button>
        </div>
      </div>
    )
  }
}

export default Machine;
