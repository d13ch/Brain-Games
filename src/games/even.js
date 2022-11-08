import logic from '../index.js';
import randomNum from '../randomNum.js';

const gameData = () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
  const num = randomNum(100, 1);
  let result = '';

  const isEven = (numFromTask) => {
    if (numFromTask % 2 === 0) {
      return true;
    } return false;
  };

  if (isEven(num)) {
    result = 'yes';
  } else result = 'no';

  return [rules, num, result];
};

export default () => logic(gameData);
