import React from "react";

import {AgeTiles, GenderTiles, EthnicityTiles} from './OutputTiles';

const Spinner = (props) => {

  console.log("previous age deg:", props.prevAgeDeg)
  console.log("current age deg:", props.ageDeg)

  return (
    <div className="machineBox" style={{
      "--agePos": `${props.ageDeg}deg`,
      "--ethnicityPos": `${props.ethnicityDeg}deg`,
      "--genderPos": `${props.genderDeg}deg`,

      "--prevAgePos": `${props.prevAgeDeg}deg`,
      "--prevEthnicityPos": `${props.prevEthnicityDeg}deg`,
      "--prevGenderPos": `${props.prevGenderDeg}deg`,

    }}>
      <div className="container">
        <div className={`stage ${props.animationRunning}`}>

          <AgeTiles categories={props.ageCategories} animationEnded={props.animationEnded}/>
          <GenderTiles categories={props.genderCategories} />
          <EthnicityTiles categories={props.ethnicityCategories} />

        </div>
      </div>

    </div>
  )
}

export default Spinner;
