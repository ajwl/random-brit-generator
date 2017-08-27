import React from "react";

const InfoBox = (props) => {
  return (
    <div className="info">
      <p>
        The {props.value} people above and their demographic characteristics, were generated at random
        from <a href="https://www.nomisweb.co.uk/census/2011/dc2101ew"> 2011 Census data for England and Wales</a>. I have selected only people of working age from 18 to 65.
        The probability of a generated person on this app being a man or woman or black or white is based on the numbers
        of residents in the UK at the time of the census.
      </p>
    </div>
  )
};

export {InfoBox};
