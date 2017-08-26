import * as data from '../data/allpple.json';
// const data = JSON.parse(jsonData);

function getPeople(num){

  const total = sumDemographicProbability(data);
  const people = [];

  for(let i = 0; i < num; i++){
    let personNum = generateRandomNumber();
    let person = findPerson(personNum);
    people.push(person);
  }
  console.log("PEOPLE SHD BE ARRAH", people);
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

function generateRandomNumber(){
    return Math.random().toFixed(11) * 100;
}

function sumDemographicProbability(data){
  return data.reduce((acc, curr) => {
    acc += curr['percentage'];
    return acc;
  }, 0)
}

export {getPeople};
