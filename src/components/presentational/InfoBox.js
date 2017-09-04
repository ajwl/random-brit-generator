import React from "react";

const InfoBox = (props) => {
  return (
    <div className="info">
      <h2>The data</h2>
      <p>
        The {props.value} people above and their demographic characteristics, were generated at random
        from <a href="https://www.nomisweb.co.uk/census/2011/dc2101ew"> 2011 Census data for England and Wales</a>. I have selected only people of working age from 18 to 65.
        The probability of a generated person on this app being a man or woman or black or white is matched exactly to the
        numbers of people with those characteristics counted in the census.
      </p>
      <h2> Why I did this </h2>
      <p>
        I was curious to see what diversity in a work environment would actually look like, given the
        demographic makeup of the UK's working age population. For example if a team of 10 people was generated
        from exactly the population of the UK, who would be in it?
      </p>
    </div>
  )
};

export {InfoBox};
