import logic from '../index.js';
import randomNum from '../randomNum.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (numFromTask) => {
  if (numFromTask % 2 === 0) {
    return true;
  } return false;
};

const gameData = () => {
  const num = randomNum();
  let result = '';
  if (isEven(num)) {
    result = 'yes';
  } else result = 'no';
  return [num, result];
};

export default () => logic(rules, gameData);
