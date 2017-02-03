/*
Name: Anjelle Nicole A. Dispo
Section: UV-3L
Exer 2
*/

const amount1 = 10000;
const amount2 = 17000;
const amount3 = 14500;
const rate = 0.0475;
const time1 = 4.25;
const time2 = 2.75;
const time3 = 3;

const compute = (P, r, t) => {
  const total = P * (1 + (r * t));
  return total;
} 

const total1 = compute(amount1, rate, time1);
const total2 = compute(amount2, rate, time2);
const total3 = compute(amount3, rate, time3);

console.log("At 4.75% interest, the total due for ₱", amount1, "after 4 years and 3 months is ₱", total1);
console.log("At 4.75% interest, the total due for ₱", amount2, "after 2 years and 9 months is ₱", total2);
console.log("At 4.75% interest, the total due for ₱", amount3, "after 3 years is ₱", total3);