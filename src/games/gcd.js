import logic from '../index.js';
import randomNum from '../randomNum.js';

const gameData = () => {
  const rules = 'Find the greatest common divisor of given numbers.';
  const num1 = randomNum(100, 1);
  const num2 = randomNum(100, 1);
  const task = `${num1} ${num2}`;
  let result = 1;
  const gcd = (firstNum, secondNum) => {
    const min = firstNum > secondNum ? secondNum : firstNum;
    const max = firstNum > secondNum ? firstNum : secondNum;
    if (max % min === 0 || firstNum === secondNum) {
      result = min;
    } else {
      for (let i = Math.floor(min / 2); i >= 2; i -= 1) {
        if (min % i === 0 && max % i === 0) {
          result = i;
          break;
        }
      }
    }
    return result;
  };
  return [rules, task, gcd(num1, num2)];
};

export default () => logic(gameData);
