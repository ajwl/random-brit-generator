import React from 'react';
import *  as converter from 'number-to-words';

  const Tile = (category, index) => {
    return(<li className={converter.toWords(index + 1)} key={index}>{category}</li>)
  }

  const AgeList = (props) => {
    return(
      <ol className="wheel age">
        {props.categories.map((category, index) => Tile(category, index))}
      </ol>
    )};

  const GenderList = (props) => {
    return (
      <ol className="wheel gender">
        {props.categories.map((category, index) => Tile(category, index))}
      </ol>
    )};


  const EthnicityList = (props) => {
    return (
      <ol className="wheel ethnicity">
        {props.categories.map((category, index) => Tile(category, index))}
      </ol>
  )};

export {AgeList, GenderList, EthnicityList};
