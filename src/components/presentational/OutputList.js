import React from 'react';

const ListItem = (props) => {
  return(
    <li>
      <span>{props.person.age} </span>
      <span>{props.person.ethnicity} </span>
      <span>{props.person.gender.toLowerCase()} </span>
    </li>
  )
};

const List = (props) => {
  const itemNode = props.items.map((item, index) => {
    return (<ListItem person={item} key={index} />);
  })
  return(<ul className="results">{itemNode}</ul>);
};

export {List};
