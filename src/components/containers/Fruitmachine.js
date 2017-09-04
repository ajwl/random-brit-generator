import React, {Component} from "react";
import '../../styles/App.css';
import '../../styles/Machine.css';
import Machine from '../presentational/Machine';

class Fruitmachine extends Component {

  render(){
    return(
      <div className="App">
        <Machine />
      </div>
    )
  }
}

export default Fruitmachine;
