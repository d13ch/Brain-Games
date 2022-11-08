import logic from '../index.js';
import randomNum from '../randomNum.js';

const gameData = () => {
  const rules = 'What is the result of the expression?';
  const num1 = randomNum(10, 1);
  const num2 = randomNum(10, 1);
  const operators = ['+', '-', '*'];
  const opIndex = randomNum(operators.length);
  const operator = operators[opIndex];

  const task = `${num1} ${operator} ${num2}`;

  let result = 0;
  const calculate = () => {
    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      default:
        result = null;
    }
    return result;
  };
  return [rules, task, calculate()];
};

export default () => logic(gameData);
