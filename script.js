// a = 10;
// b = 6;

// console.log(`before: a = ${a}, b = ${b}`);
// if (a < b) {
//   console.log(`a is less than b`);
//   a = a * 3;
// } else if (a === b) {
//   console.log(`a is equal b`);
//   a = 0;
// } else {
//   console.log(`a is greater than b`);
//   b = b * 3;
// }

// if (a < b) {
//   a = a * 3;
// } else {
//   b = b * 3;
// }

// if (a < b) {
//   a = a * 10;
// }
// console.log(`after: a = ${a}, b = ${b}`);

// variables
const url = "https://api.chucknorris.io/jokes/random";

const btnGetJoke = document.querySelector("#get-joke");
const answer = document.querySelector("#answer");
// fuctions

const getJson = async (url) => {
  const resp = await fetch(url);
  const respJson = await resp.json();
  return respJson;
};

const getNextJoke = async (e) => {
  const joke = await getJson(url);
  console.log(joke["value"]);
  answer.innerText = joke["value"];
};

// events
btnGetJoke.addEventListener("click", getNextJoke);
