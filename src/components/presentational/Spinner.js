import React from "react";

const Spinner = (props) => {

  console.log("in spinner props", props)

  return (
      <div className={`spinner ${props.animate}`}>
        <div className="window"><span className="quality">{props.age}</span></div>
        <div className="window"><span className="quality">{props.ethnicity}</span></div>
        <div className="window"><span className="quality">{props.gender}</span></div>
      </div>
  )
}

export default Spinner;
