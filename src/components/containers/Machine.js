import React, {Component} from "react";
import Spinner from '../presentational/Spinner';
import {getPosition} from '../../lib/getPositions';

class Machine extends Component {
  constructor(props){
    super(props);
    this.state = {
      ageDeg: 0,
      ethnicityDeg: 0,
      genderDeg: 0,
      allPeople: [],
    };
    this.calculateDegree = this.calculateDegree.bind(this);
    this.positionToDegree = this.positionToDegree.bind(this);
  }

  componentWillReceiveProps(nextProps){
    this.calculateDegree(this.props, nextProps);
  }

  calculateDegree (prev, current){
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
    const prevAgePosition = getPosition(prev.age, prev.ageCategories);
    const prevEthnicityPosition = getPosition(prev.ethnicity, prev.ethnicityCategories);
    const prevGenderPosition = getPosition(prev.gender, prev.genderCategories);

    const prevAgeDegree = this.positionToDegree(prevAgePosition);
    const prevEthnicityDegree = this.positionToDegree(prevEthnicityPosition);
    const prevGenderDegree = this.positionToDegree(prevGenderPosition);

    this.setState({'prevAgeDeg': prevAgeDegree})
    this.setState({'prevEthnicityDeg': prevEthnicityDegree})
    this.setState({'prevGenderDeg': prevGenderDegree})
  }

  positionToDegree(pos){
    const deg = pos !== 0 ? (pos * 36) : 0; // number of degrees for each option, ie 360 deg / 10 options
    return deg + 360; // add a complete turn first to give more spin
  }

  render(){
    return (
      <div className="machine">
        <Spinner
          age={this.props.age}
          ethnicity={this.props.ethnicity}
          gender={this.props.gender}

          ageDeg={this.state.ageDeg}
          ethnicityDeg={this.state.ethnicityDeg}
          genderDeg={this.state.genderDeg}

          prevAgeDeg={this.state.prevAgeDeg}
          prevEthnicityDeg={this.state.prevEthnicityDeg}
          prevGenderDeg={this.state.prevGenderDeg}

          ageCategories={this.props.ageCategories}
          genderCategories={this.props.genderCategories}
          ethnicityCategories={this.props.ethnicityCategories}

          animationEnded={this.props.animationEnded}
          animationRunning={this.props.animationRunning}
        />
        <div className="buttons">
          <button onClick={this.props.rerunSpinner}
                  className={this.props.animationRunning}
                  id="startButton">
                  <span></span>
          </button>
        </div>
      </div>
    )
  }
}

export default Machine;
