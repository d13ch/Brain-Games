import startLogic from '../index.js';
import randomNum from '../randomNum.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (numFromTask) => numFromTask % 2 === 0;

const getGameData = () => {
  const num = randomNum();
  const result = isEven(num) ? 'yes' : 'no';

  return [num, result];
};

export default () => startLogic(rules, getGameData);
