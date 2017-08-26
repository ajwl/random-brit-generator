import React from 'react';

const ListItem = (props) => {
  return(
    <li>
      <span>{props.person.ethnicity} </span>
      <span>{props.person.age} </span>
      <span>{props.person.gender} </span>
    </li>
  )
};

const List = (props) => {
  const itemNode = props.items.map((item, index) => {
    return (<ListItem person={item} key={index} />);
  })
  return(<ul>{itemNode}</ul>);
};

export {List};
