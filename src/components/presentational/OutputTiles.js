import React from 'react';
import *  as converter from 'number-to-words';

  const Tile = (category, index) => {
    return(<li className={converter.toWords(index + 1)} key={index}>{category}</li>)
  }

  const AgeTiles = (props) => {
    return(
      <ol className="wheel age" onAnimationEnd={props.animationEnded}>
        {props.categories.map((category, index) => Tile(category, index))}
      </ol>
    )};

  const GenderTiles = (props) => {
    const a = props.categories.slice();
    const tenCatgeories = props.categories.concat(a).concat(a).concat(a).concat(a); //hack to create 10 tiles out of 2 names
    return (
      <ol className="wheel gender">
        {tenCatgeories.map((category, index) => Tile(category, index))}
      </ol>
    )};

  const EthnicityTiles = (props) => {
    const a = props.categories.slice();
    const tenCatgeories = props.categories.concat(a);
    return (
      <ol className="wheel ethnicity">
        {tenCatgeories.map((category, index) => Tile(category, index))}
      </ol>
    )};

export {AgeTiles, GenderTiles, EthnicityTiles};
