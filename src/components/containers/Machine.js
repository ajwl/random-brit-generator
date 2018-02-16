import React, {Component} from "react";
import Spinner from '../presentational/Spinner';

class Machine extends Component {
  constructor(props){
    super(props);
    this.state = {
      ageDeg: 0,
      ethnicityDeg: 0,
      genderDeg: 0,
    };
    this.calculateDegree = this.calculateDegree.bind(this);
    // this.agePositionToDegree = this.agePositionToDegree.bind(this);
    // this.genderPositionToDegree = this.genderPositionToDegree.bind(this);
    // this.ethnicityPositionToDegree = this.ethnicityPositionToDegree.bind(this);
  }

  componentWillReceiveProps(){
    this.calculateDegree();
  }

  calculateDegree (){
    const ageDegree = this.props.agePos * 36;
    // console.log("ageDegree", ageDegree);
    const ethnicityDegree = this.ethnicityPositionToDegree(this.props.ethnicityPos);
    // console.log("ethnicityDegree", ethnicityDegree);
    const genderDegree = this.genderPositionToDegree(this.props.genderPos);
    // console.log("genderDegree", genderDegree);

    this.setState({'ageDeg': ageDegree})
    this.setState({'ethnicityDeg': ethnicityDegree})
    this.setState({'genderDeg': genderDegree})
  }

  // agePositionToDegree(pos){
  //   console.log("AGE POS", pos);
  //   return pos * 36; // number of degrees for each option, ie 360 deg / 10 options
  // }
  genderPositionToDegree(pos){
    // return (10 - pos) * 36;
    return 360;
  }
  ethnicityPositionToDegree(pos){
    // return (pos) * 2 * 36;
    return 360;
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
