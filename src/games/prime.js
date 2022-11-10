import logic from '../index.js';
import randomNum from '../randomNum.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

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

const gameData = () => {
  const num = randomNum(98, 2);
  const result = isPrime(num) ? 'yes' : 'no';

  return [num, result];
};

export default () => logic(rules, gameData);
