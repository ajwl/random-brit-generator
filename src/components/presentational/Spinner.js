import React from "react";

import {AgeTiles, GenderTiles, EthnicityTiles} from './OutputTiles';

const Spinner = (props) => {

  return (
    <div className="machineBox" style={{
      "--agePos": `${props.ageDeg}deg`,
      "--ethnicityPos": `${props.ethnicityDeg}deg`,
      "--genderPos": `${props.genderDeg}deg`
    }}>
      <div className="container">
        <div className={`stage ${props.animate}`}>

          <AgeTiles categories={props.ageCategories} />
          <GenderTiles categories={props.genderCategories} />
          <EthnicityTiles categories={props.ethnicityCategories} />

        </div>
      </div>

    </div>
  )
}

export default Spinner;
