import randomNum from '../randomNum.js';

const rules = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
};

const gameData = () => {
  const num = randomNum(100) + 1;
  let result = '';

  if (num % 2 === 0) {
    result = 'yes';
  } else result = 'no';
  return [num, result];
};

export { rules, gameData };
