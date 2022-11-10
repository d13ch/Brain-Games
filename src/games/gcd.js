import logic from '../index.js';
import randomNum from '../randomNum.js';

const rules = 'Find the greatest common divisor of given numbers.';

const findGcd = (firstNum, secondNum) => {
  let gcd = 1;
  const min = firstNum > secondNum ? secondNum : firstNum;
  const max = firstNum > secondNum ? firstNum : secondNum;
  if (max % min === 0 || firstNum === secondNum) {
    gcd = min;
  } else {
    for (let i = Math.floor(min / 2); i >= 2; i -= 1) {
      if (min % i === 0 && max % i === 0) {
        gcd = i;
        break;
      }
    }
  }
  return gcd;
};

const gameData = () => {
  const num1 = randomNum();
  const num2 = randomNum();
  const task = `${num1} ${num2}`;
  const result = findGcd(num1, num2);

  return [task, result];
};

export default () => logic(rules, gameData);
