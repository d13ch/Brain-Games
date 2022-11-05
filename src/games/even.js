const rules = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
};

const gameData = () => {
  const num = Math.floor(Math.random() * 100) + 1;
  let result = '';

  if (num % 2 === 0) {
    result = 'yes';
  } else result = 'no';
  return [num, result];
};

export { rules, gameData };
