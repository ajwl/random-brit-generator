import React, {Component} from "react";
import Spinner from '../presentational/Spinner';
import {getPosition} from '../../lib/getPositions';
import {MachineList} from '../presentational/MachineList';
import {calculateSummary} from '../../lib/calculateSummary';
import {AreaButton} from '../presentational/AreaButton.js';
// import Button from './Button';

class Machine extends Component {
  constructor(props){
    super(props);
    this.state = {
      ageDeg: 0,
      ethnicityDeg: 0,
      genderDeg: 0,
      allPeople: [],
      summary: {},
      area: ''
    };
    this.calculateDegree = this.calculateDegree.bind(this);
    this.positionToDegree = this.positionToDegree.bind(this);
    this.putPersonInList = this.putPersonInList.bind(this);
    this.handleGeographyChange = this.handleGeographyChange.bind(this);
  }

  componentWillReceiveProps(){
    this.calculateDegree();
  }

  handleGeographyChange(e){
    let geoArea = e.target.id;
    this.props.setArea(geoArea);
    this.setState({area: geoArea })
  }

  calculateDegree (){
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

    // delay before appending li, so it doesn't arrive before the runSpinner
    if(this.props.animationRunning === 'animationPaused'){
      setTimeout(() => this.putPersonInList(), 2000);
    }
  }

  positionToDegree(pos){
    const deg = pos !== 0 ? (pos * 36) : 0; // number of degrees for each option, ie 360 deg / 10 options
    return deg + 360; // add a complete turn first to give more spin
  }

  putPersonInList(){
    const {prevAge, prevGender, prevEthnicity} = this.props;
    const selectedPerson = {age: prevAge, gender: prevGender, ethnicity: prevEthnicity};
    const currentPeople = (this.state.allPeople);
    currentPeople.unshift(selectedPerson);
  }

  sumUpPeople(){
    const sumObj = calculateSummary(this.state.allPeople);
    this.setState({'summary': sumObj});
  }

  render(){
    return (
      <div className="machine">
        <h2> Intersectionality fruitmachine</h2>
        <AreaButton getArea={this.handleGeographyChange} isLondon={this.state.area === 'london'}/>
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
          <ul>
            <MachineList
              people={this.state.allPeople}
            />
          </ul>
        </div>
      </div>
    )
  }
}

export default Machine;
