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
        <div className="info-text">
          <h3> Why I did this</h3>
          <p>
            I was curious to see what diversity in a work environment would actually
            look like, given the demographic makeup of the UK's working age population.
            For example if a team of 10 people was generated from exactly the population of the UK, who would be in it?
          </p>
          <p> I'm also interested in different ways of presenting probability. Eg. instead of just giving topline statistics -
          in a given group, what is the chance of someone turning up.</p>

          <h3>The data</h3>
          <p>
            The people created by the generator and the fruitmachine and their demographic
            characteristics, were generated at random from
            <a href="https://www.nomisweb.co.uk/census/2011/dc2101ew"> 2011 Census data
            for England and Wales</a>.
          </p>
          <p>
            I then split out London data
            separately on both apps. I have selected only people of working age from 18 to 65.
            The probability of a generated person on this app being a man or woman or black or
            white is matched exactly to the numbers of people with those characteristics counted in the census.
          </p>

          <h3>How does it work?</h3>
          <p>To slightly simplify - say there are 35million people between 18-65 in England & Wales, the app picks a random
          number between 1 and 35million and then finds that person in the data. </p>

          <h3> Why are the ethnicity/gender categories so limited?</h3>
          <p> Good points, I just used the data from the ONS, and the categories they split people into.
          The ethnicity data does go deeper, but I just used larger groups for simplicity. Gender non-binary
          people are not recorded at this level in the Census data.</p>

          <h3> Where's the data for Scotland and Northern Ireland?</h3>
          <p> Sorry the correlated data on ethnicity, gender and age was not available for those countries. </p>

          <h3> Why did you pull out London?</h3>
          <p> It's where I live and I was interested in it </p>

          <h3>Isn't it meaningless to group people by characteristics like this instead of who they are?</h3>
          <p> It is of course reductive, but it's not entirely meaningless, because of how power and wealth and jobs shake
          out along these lines.</p>
          <p>On the other hand, diversity shouldn't just be about parsing half points of percentages and trying to get just
            the right amount of a certain minority group. But sometimes the data can be valuable in showing up
            the gaps in particular areas, in cold numbers. </p>
          <p>Plus there is a human tendency to misuse averages, that biases against minorities. eg. if a population is majority white,
            white people are considered to be the default. Which creates these ideas of defaults or norms, which are not
            statistically accurate, as well as socially problematic.
            That's why I wanted to get away from the top line percentages and to pull out actual people and actual groups.</p>
      </div>
      </div>
    </div>
  )
};
export {InfoBox}
