import React from 'react';
import {SummaryBox} from './SummaryBox';

const MachineList = (props) => {
  return (
    <div>
      <SummaryBox people={props.people} />
      <ul>{props.people.map( (p,i) => (<li key={i}>{p.age} {p.ethnicity} {p.gender}</li>)) }</ul>
    </div>
   );
};

export {MachineList};
