import randomNum from '../randomNum.js';

const rules = () => {
  console.log('What number is missing in the progression?');
};

const gameData = () => {
  const progression = [randomNum(100)];

  const minItems = 4;
  const maxItems = 10;
  const itemsOfProgression = randomNum(maxItems - minItems) + minItems;
  const progressionStep = randomNum(9) + 1;

  for (let i = 1; i <= itemsOfProgression; i += 1) {
    progression.push(progression[i - 1] + progressionStep);
  }

  const randomItem = randomNum(itemsOfProgression);
  const correctAnswer = progression[randomItem];
  progression[randomItem] = '..';
  const task = progression.join(' ');

  return [task, correctAnswer];
};

export { rules, gameData };
