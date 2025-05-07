"use strict";
function logAndReturnValue(value) {
  return value;
}
// const result1 = logAndReturnValue<boolean>(true)
function getRandomArrayValue(values) {
  const i = Math.floor(Math.random() * values.length);
  return values[i];
}
const user = [
  { name: "Draker", score: 1000 },
  { name: "Min", score: 900 },
  { name: "Mon", score: 1100 },
  { name: "Kyaw", score: 500 },
];
const result = getRandomArrayValue(user);
console.log(result);

const name = "arkarararara";
const age = 22222;
const dd = [
  {
    name: "fasf",
  },
  {
    name: "dddd",
    age: "3232",
  },
];

const aaa = 'dfdfsafddfsafas'