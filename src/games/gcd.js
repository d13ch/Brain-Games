import startLogic from '../index.js';
import randomNum from '../randomNum.js';

const rules = 'Find the greatest common divisor of given numbers.';

const findGcd = (firstNum, secondNum) => {
  if (!secondNum) {
    return firstNum;
  }

  return findGcd(secondNum, firstNum % secondNum);
};

const getGameData = () => {
  const num1 = randomNum();
  const num2 = randomNum();
  const task = `${num1} ${num2}`;
  const result = findGcd(num1, num2);

  return [task, result];
};

export default () => startLogic(rules, getGameData);
