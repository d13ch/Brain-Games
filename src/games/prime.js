import randomNum from '../randomNum.js';

const rules = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
};

const gameData = () => {
  const num = randomNum(98, 2);
  let result = '';

  for (let i = Math.floor(num / 2); i >= 1; i -= 1) {
    if (num <= 3) {
      result = 'yes';
      break;
    } else if (num % i === 0) {
      result = 'no';
      break;
    } else result = 'yes';
  }
  return [num, result];
};

export { rules, gameData };
