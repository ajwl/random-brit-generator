import React, {Component} from "react";
import Spinner from '../presentational/Spinner';
import { CSSTransitionGroup } from 'react-transition-group'


class Machine extends Component {
  constructor(props){
    super(props);
    // this.clearAnimation = this.clearAnimation.bind(this);
  }

  render(){
    return (
      <div className="machine">
        <h2> Intersectionality fruitmachine</h2>
        <Spinner animate={this.props.animate} age={this.props.age} ethnicity={this.props.ethnicity} gender={this.props.gender}/>
        <div className="buttons">
          <button onClick={this.props.rerunSpinner}>Run the machine</button>
          <button onClick={this.props.clearAnimation}>Stop the machine</button>
        </div>
      </div>
    )
  }
}

export default Machine;
