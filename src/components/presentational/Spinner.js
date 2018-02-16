import React from "react";

import {AgeList, GenderList, EthnicityList} from './OutputTiles';

const Spinner = (props) => {

  console.log("in spinner props", props)

  return (
    <div className="machineBox" style={{
      "--agePos": `${props.ageDeg}deg`,
      "--ethnicityPos": `${props.ethnicityDeg}deg`,
      "--genderPos": `${props.genderDeg}deg`
    }}>
      <div className="container">
        <div className={`stage ${props.animate}`}>
          <AgeList categories={props.ageCategories} />
          <GenderList categories={props.genderCategories} />
          <EthnicityList categories={props.ethnicityCategories} />
        </div>
      </div>

    </div>
  )
}

export default Spinner;
