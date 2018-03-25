import React from 'react';
import {SummaryBox} from './SummaryBox';

const MachineList = (props) => {
  return (
    <div>
      <ul className="results">{props.people.map( (p,i) => (<li key={i}>{p.age} {p.ethnicity.toLowerCase()} {p.gender.toLowerCase()}</li>)) }</ul>
      <SummaryBox people={props.people} />
    </div>
   );
};

export {MachineList};
