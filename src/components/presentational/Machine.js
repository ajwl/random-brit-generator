import React from "react";
import Spinner from './Spinner';

const Machine = (props) => {
  return (
    <div className="machine">
      <h2> heloooooo </h2>
      <Spinner age={props.age} ethnicity={props.ethnicity} gender={props.gender}/>
      <button onClick={props.rerunSpinner}>Run the machine</button>
    </div>
  )
};

export default Machine;
