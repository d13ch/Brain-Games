import logic from '../index.js';
import randomNum from '../randomNum.js';

const gameData = () => {
  const rules = 'What number is missing in the progression?';
  const num = randomNum(100);

  const minItems = 4;
  const maxItems = 10;
  const rangeOfProgression = randomNum(maxItems - minItems, minItems);
  const step = randomNum(9, 1);

  const progrGeneration = (initItem, lengthOfProgression, progressionStep) => {
    const progression = [initItem];
    for (let i = 1; i <= lengthOfProgression; i += 1) {
      progression.push(progression[i - 1] + progressionStep);
    }

    const randomItem = randomNum(lengthOfProgression);
    const correctAnswer = progression[randomItem];
    progression[randomItem] = '..';
    const task = progression.join(' ');

    return [task, correctAnswer];
  };

  return [rules, ...progrGeneration(num, rangeOfProgression, step)];
};

export default () => logic(gameData);
