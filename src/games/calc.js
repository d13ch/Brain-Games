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
  const calculate = (firstNum, secondNum, operatorFromTask) => {
    switch (operatorFromTask) {
      case '+':
        result = firstNum + secondNum;
        break;
      case '-':
        result = firstNum - secondNum;
        break;
      case '*':
        result = firstNum * secondNum;
        break;
      default:
        result = null;
    }

    return result;
  };

  return [rules, task, calculate(num1, num2, operator)];
};

export default () => logic(gameData);
