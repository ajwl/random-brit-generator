
export function calculateSummary(allPeople) {
  const genderSum = allPeople.reduce((acc, curr) => {
    curr.gender === "female" ? acc.f++ : acc.m++;
    return acc;
  },{m: 0, f: 0});

  const ethnicitySum = allPeople.reduce((acc, curr) => {
    switch (curr.ethnicity){
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

  }, {a:0, b:0, m:0, o:0, w:0})

  const ageSum = allPeople.reduce((acc, curr) => {

  }, {twenties:0, thirties: 0, forties: 0, fifties: 0, sixties: 0})
}
