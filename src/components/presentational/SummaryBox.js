import React from 'react';

export const SummaryBox = (props) => {

  const characteristics = Object.keys(props.people[0]);

  const resultObj = characteristics.reduce((acc,curr) => {
    acc[curr] = 0;
    return acc;
    }, {})
  console.log("result obj", resultObj);

  props.people.reduce((acc, curr) => {


  }, resultObj);


  // const men = sumUpGender(props.people, 'men');
  // const women = sumUpGender(props.people, 'women');
  //
  // function sumUpGender(data, property){
  //   return data.reduce((acc, curr) => {
  //       if(curr.gender === property) return acc++;
  //     }, 0);
  // }
  //
  // const white =
  // const asian =

  return (
    <div className="summary">
      <p>{2} men and {3} women</p>
      <p>{3} asian people, {} black people, {0} people of "other" ethnicities, {} mixed race people and {5} white people</p>
      <p>{2} people in their 20s, {} people in their 30s, {} people in their 40s, {} in their 50s and {} in their 60s.</p>
    </div>
  )
};
