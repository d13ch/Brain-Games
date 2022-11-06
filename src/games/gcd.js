import randomNum from '../randomNum.js';

const rules = () => {
  console.log('Find the greatest common divisor of given numbers.');
};

const gameData = () => {
  const num1 = randomNum(10, 1);
  const num2 = randomNum(10, 1);
  const task = `${num1} ${num2}`;

  let min = num1;
  let max = num2;
  if (num1 > num2) {
    min = num2;
    max = num1;
  }

  let result = 1;
  if (num1 === num2) {
    result = num1;
  }
  if (max % min === 0) {
    result = min;
  } else {
    for (let i = Math.floor(min / 2); i >= 2; i -= 1) {
      if (min % i === 0 && max % i === 0) {
        result = i;
        break;
      }
    }
  }

  return [task, result];
};

export { rules, gameData };
