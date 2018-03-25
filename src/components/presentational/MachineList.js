import React from 'react';
import {SummaryBox} from './SummaryBox';

const MachineList = (props) => {
  return (
    <div>
      <ul>{props.people.map( (p,i) => (<li key={i}>{p.age} {p.ethnicity} {p.gender}</li>)) }</ul>
      <SummaryBox people={props.people} />
    </div>
   );
};

export {MachineList};
