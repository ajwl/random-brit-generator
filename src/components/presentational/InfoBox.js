import React from "react";
import {Menu} from './Menu';

const InfoBox = (props) => {
  return (
    <div className="App info">
      <Menu/>
      <div className="App-header">
        <h2>Information</h2>
      </div>
      <div className="App-container">
        <h2>The data</h2>
        <p>
          The people created by the generator and the fruitmachine and their demographic
          characteristics, were generated at random from
          <a href="https://www.nomisweb.co.uk/census/2011/dc2101ew"> 2011 Census data
          for England and Wales</a>. I then split out London data
          separately on both apps. I have selected only people of working age from 18 to 65.
          The probability of a generated person on this app being a man or woman or black or
          white is matched exactly to the numbers of people with those characteristics counted in the census.
        </p>
        <h2> Why I did this</h2>
        <p>
          I was curious to see what diversity in a work environment would actually
          look like, given the demographic makeup of the UK's working age population.
          For example if a team of 10 people was generated from exactly the population of the UK, who would be in it?
        </p>
      </div>
    </div>
  )
};
export {InfoBox}
