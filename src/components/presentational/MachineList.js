import React from 'react';

const MachineList = (props) => {
  return (
    <div>
      <ul className="results">{props.people.map( (p,i) => (<li key={i}>{p.age} {p.ethnicity.toLowerCase()} {p.gender.toLowerCase()}</li>)) }</ul>
    </div>
   );
};

export {MachineList};
