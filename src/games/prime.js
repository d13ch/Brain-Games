import logic from '../index.js';
import randomNum from '../randomNum.js';

const gameData = () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const num = randomNum(98, 2);
  let result = '';

  const isPrime = (numFromTask) => {
    if (numFromTask <= 3) {
      return true;
    }

    for (let i = Math.floor(numFromTask / 2); i >= 2; i -= 1) {
      if (numFromTask % i === 0) {
        return false;
      }
    } return true;
  };

  if (isPrime(num)) {
    result = 'yes';
  } else result = 'no';

  return [rules, num, result];
};

export default () => logic(gameData);
