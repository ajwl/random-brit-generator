import * as data from '../data/allpple.json';

function getPeople(num){

  const total = sumDemographicProbability(data);
  const people = [];

  for(let i = 0; i < num; i++){
    let personNum = generateRandomNumber(total);
    let person = findPerson(personNum);
    people.push(person);
  }
  return people;
};

function findPerson(personNum){
  let personSegment;
  let popSegmentsSummed = 0;
  for(let i = 0; i < data.length; i++){
    popSegmentsSummed += data[i]['percentage'];
    if(personNum <= popSegmentsSummed){
      personSegment = data[i];
      return personSegment;
    }
  }
  return personSegment;
}

function generateRandomNumber(total){
    return Math.random().toFixed(11) * total;
}

function sumDemographicProbability(data){
  return data.reduce((acc, curr) => {
    acc += curr['percentage'];
    return acc;
  }, 0)
}

function getCategories(key){
  const listOptions = data.reduce((acc,curr) => {
    acc.push(curr[key]);
    return acc;
  }, []);
  return Array.from( new Set (listOptions)); // dedupe using set
}


export {getPeople, getCategories};
