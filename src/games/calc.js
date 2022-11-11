import startLogic from '../index.js';
import randomNum from '../randomNum.js';

const rules = 'What is the result of the expression?';

const calculate = (firstNum, secondNum, operatorFromTask) => {
  switch (operatorFromTask) {
    case '+':
      return firstNum + secondNum;
    case '-':
      return firstNum - secondNum;
    case '*':
      return firstNum * secondNum;
    default:
      throw new Error('404 Operator not found');
  }
};

const getGameData = () => {
  const num1 = randomNum(1, 10);
  const num2 = randomNum(1, 10);
  const operators = ['+', '-', '*'];
  const operatorsIndex = randomNum(0, operators.length);
  const operator = operators[operatorsIndex];
  const task = `${num1} ${operator} ${num2}`;
  const result = calculate(num1, num2, operator);

  return [task, result];
};

export default () => startLogic(rules, getGameData);
