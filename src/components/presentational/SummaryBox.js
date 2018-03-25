import React from 'react';
import {calculateSummary} from '../../lib/calculateSummary';

export const SummaryBox = (props) => {
  const s = calculateSummary(props.people);

  return (
    <div className="summary">
      <p>{s.gender.m} {s.gender.m === 1 ? 'man' : 'men'} and {s.gender.f} {s.gender.f === 1 ? 'woman' : 'women'}</p>
      <p>{s.ethnicity.w} white, {s.ethnicity.a} asian, {s.ethnicity.b} black, {s.ethnicity.m} mixed
        race people and {s.ethnicity.o} people of other ethnicities
      </p>
      <p>{s.age.twenties} in their 20s, {s.age.thirties} in their
        30s, {s.age.forties} in their 40s, {s.age.fifties} in their 50s and {s.age.sixties} in their 60s</p>
    </div>
  )
};
