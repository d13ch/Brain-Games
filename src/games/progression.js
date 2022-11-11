import startLogic from '../index.js';
import randomNum from '../randomNum.js';

const rules = 'What number is missing in the progression?';

const makeProgression = (firstItem, lengthOfProgression, progressionStep) => {
  const progression = [firstItem];
  for (let i = 1; i <= lengthOfProgression; i += 1) {
    progression.push(progression[i - 1] + progressionStep);
  }
  const randomItem = randomNum(0, lengthOfProgression);
  const correctAnswer = progression[randomItem];
  progression[randomItem] = '..';
  const task = progression.join(' ');

  return [task, correctAnswer];
};

const getGameData = () => {
  const num = randomNum(0, 99);
  const minItems = 4;
  const maxItems = 10;
  const rangeOfProgression = randomNum(minItems, maxItems - minItems);
  const step = randomNum(1, 9);
  const result = makeProgression(num, rangeOfProgression, step);

  return result;
};

export default () => startLogic(rules, getGameData);
