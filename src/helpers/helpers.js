export const sendGet = async (url, headers) => {
  return await fetch(url, { method: "GET" })
  .then(res => res.json())
  .catch(error => console.error(`Error on endpoint ${url} \n ${error}`));
};

export const randomNumber = (max) => Math.floor(Math.random() * max) + 1;

export const coinToss = () => Math.floor(Math.random() * 2) + 1;

export const rollNDices = (dice, count) => {
  let rolls = [];
  for (let i=1; i <= count; i++) {
   rolls.push(randomNumber(dice)); 
  }
  return rolls;
};

export const getNRandomNumber = (start, max, count) => {
  let numbers = [];
  for (let i=start; i < count+start; i++) {
    numbers.push({type: i, value: randomNumber(max)});
  }
  return numbers;
};