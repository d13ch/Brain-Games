import logic from '../index.js';
import randomNum from '../randomNum.js';

const rules = 'What number is missing in the progression?';

const makeProgression = (initItem, lengthOfProgression, progressionStep) => {
  const progression = [initItem];
  for (let i = 1; i <= lengthOfProgression; i += 1) {
    progression.push(progression[i - 1] + progressionStep);
  }
  const randomItem = randomNum(lengthOfProgression, 0);
  const correctAnswer = progression[randomItem];
  progression[randomItem] = '..';
  const task = progression.join(' ');

  return [task, correctAnswer];
};

const gameData = () => {
  const num = randomNum(99, 0);
  const minItems = 4;
  const maxItems = 10;
  const rangeOfProgression = randomNum(maxItems - minItems, minItems);
  const step = randomNum(9);
  const result = makeProgression(num, rangeOfProgression, step);

  return result;
};

export default () => logic(rules, gameData);
