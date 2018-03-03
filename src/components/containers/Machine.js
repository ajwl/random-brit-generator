import React, {Component, PureComponent} from "react";
import Spinner from '../presentational/Spinner';
import {getPosition} from '../../lib/getPositions';
// import Button from './Button';

class Machine extends PureComponent {
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
    console.log("In Machine props are:", this.props.gender, this.props.age, this.props.ethnicity)

    // set current values
    const agePosition = getPosition(this.props.age, this.props.ageCategories);
    const ethnicityPosition = getPosition(this.props.ethnicity, this.props.ethnicityCategories);
    const genderPosition = getPosition(this.props.gender, this.props.genderCategories);

    const ageDegree = this.positionToDegree(agePosition);
    const ethnicityDegree = this.positionToDegree(ethnicityPosition);
    const genderDegree = this.positionToDegree(genderPosition);

    this.setState({'ageDeg': ageDegree})
    this.setState({'ethnicityDeg': ethnicityDegree})
    this.setState({'genderDeg': genderDegree})

    // set previous values
    const prevAgePosition = getPosition(this.props.prevAge, this.props.ageCategories);
    const prevEthnicityPosition = getPosition(this.props.prevEthnicity, this.props.ethnicityCategories);
    const prevGenderPosition = getPosition(this.props.prevGender, this.props.genderCategories);

    const prevAgeDegree = this.positionToDegree(prevAgePosition);
    const prevEthnicityDegree = this.positionToDegree(prevEthnicityPosition);
    const prevGenderDegree = this.positionToDegree(prevGenderPosition);

    this.setState({'prevAgeDeg': prevAgeDegree})
    this.setState({'prevEthnicityDeg': prevEthnicityDegree})
    this.setState({'prevGenderDeg': prevGenderDegree})

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
          age={this.props.age}
          ethnicity={this.props.ethnicity}
          gender={this.props.gender}
          ageCategories={this.props.ageCategories}
          genderCategories={this.props.genderCategories}
          ethnicityCategories={this.props.ethnicityCategories}

          ageDeg={this.state.ageDeg}
          ethnicityDeg={this.state.ethnicityDeg}
          genderDeg={this.state.genderDeg}

          prevAgeDeg={this.state.prevAgeDeg}
          prevEthnicityDeg={this.state.prevEthnicityDeg}
          prevGenderDeg={this.state.prevGenderDeg}

          animate={this.props.animate}
          animationRun={this.props.animationRun}
          animationEnded={this.props.animationEnded}
          animationRunning={this.props.animationRunning}
        />
        <div className="buttons">
          <button onClick={this.props.rerunSpinner} className={this.props.animationRunning ? 'animationRunning' : ''} id="startButton">Run the machine</button>
        </div>
      </div>
    )
  }
}

export default Machine;
