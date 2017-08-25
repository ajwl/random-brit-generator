import * as generator from './generator';

it('takes a number as an input, and returns that number of people', ()=>{
  const eightPeople = generator.getPeople(8);
  eightPeople.length === 8;
});

it('accepts numbers between 1 & 100', () =>{

});
