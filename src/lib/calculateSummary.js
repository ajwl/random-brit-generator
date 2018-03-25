
export function calculateSummary(allPeople) {
  const genderSum = allPeople.reduce((acc, curr) => {
    curr.gender.toLowerCase() === "female" ? acc.f++ : acc.m++;
    return acc;
  },{m: 0, f: 0});

  const ethnicitySum = allPeople.reduce((acc, curr) => {
    switch (curr.ethnicity.toLowerCase()){
      case 'asian':
        acc.a++;
        break;
      case 'black':
        acc.b++;
        break;
      case 'mixed':
        acc.m++;
        break;
      case 'white':
        acc.w++;
        break;
    }
    return acc;
  }, {a:0, b:0, m:0, o:0, w:0})

  const ageSum = allPeople.reduce((acc, curr) => {
    const age = curr.age;
    const decade = age.charAt(0);
    switch (decade){
      case '2':
        acc.twenties++
        break;
      case '3':
        acc.thirties++;
        break;
      case '4':
        acc.forties++;
        break;
      case '5':
        acc.fifties++;
        break;
      case '6':
        acc.sixties++
        break;
    }
    return acc;
  }, {twenties:0, thirties: 0, forties: 0, fifties: 0, sixties: 0})

  return {
    gender: genderSum,
    ethnicity: ethnicitySum,
    age: ageSum
  }
}
