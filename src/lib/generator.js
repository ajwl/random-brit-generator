import * as ewData from '../data/allpple.json';
import * as ldData from '../data/allpple-london.json'

function getData(area) {
  console.log("ewData", ewData)
  return (area === 'london' ? ldData.default : ewData.default);
}

function getPeople(num, area) {

  const data = getData(area)
  const total = sumDemographicProbability(data);
  const people = [];

  for (let i = 0; i < num; i++) {
    let personNum = generateRandomNumber(total);
    let person = findPerson(personNum, data);
    people.push(person);
  }
  return people;
};

function findPerson(personNum, data) {
  let personSegment;
  let popSegmentsSummed = 0;
  for (let i = 0; i < data.length; i++) {
    popSegmentsSummed += data[i]['percentage'];
    if (personNum <= popSegmentsSummed) {
      personSegment = data[i];
      return personSegment;
    }
  }
  return personSegment;
}

function generateRandomNumber(total) {
  return Math.random().toFixed(11) * total;
}

function sumDemographicProbability(data) {
  return data.reduce((acc, curr) => {
    acc += curr['percentage'];
    return acc;
  }, 0)
}

function getCategories(key, area) {
  const data = getData(area);

  const listOptions = data.reduce((acc, curr) => {
    acc.push(curr[key]);
    return acc;
  }, []);
  return Array.from(new Set(listOptions)); // dedupe using set
}


export { getPeople, getCategories };
