import logic from '../index.js';
import randomNum from '../randomNum.js';

const rules = 'What is the result of the expression?';

const calculate = (firstNum, secondNum, operatorFromTask) => {
  let solution;
  switch (operatorFromTask) {
    case '+':
      solution = firstNum + secondNum;
      break;
    case '-':
      solution = firstNum - secondNum;
      break;
    case '*':
      solution = firstNum * secondNum;
      break;
    default:
      solution = null;
  }

  return solution;
};

const gameData = () => {
  const num1 = randomNum(10);
  const num2 = randomNum(10);
  const operators = ['+', '-', '*'];
  const opIndex = randomNum(operators.length, 0);
  const operator = operators[opIndex];

  const task = `${num1} ${operator} ${num2}`;

  const result = calculate(num1, num2, operator);

  return [task, result];
};

export default () => logic(rules, gameData);
