import React from "react";
import Spinner from './Spinner';

const Machine = (props) => {
  return (
    <div className="machine">
      <h2> Intersectionality fruitmachine</h2>
      <Spinner age={props.age} ethnicity={props.ethnicity} gender={props.gender} animate={props.animate}/>
      <div className="buttons">
        <button onClick={props.rerunSpinner}>Run the machine</button>
        <button onClick={props.clearAnimation}>Stop the machine</button>
      </div>
    </div>
  )
};

export default Machine;
