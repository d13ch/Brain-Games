import readlineSync from 'readline-sync';

const logic = (gameData) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  const [rules] = gameData();
  console.log(rules);

  for (let i = 1; i <= 3; i += 1) {
    const gameDataOutput = gameData();
    const correctAnswer = String(gameDataOutput[2]);
    console.log(`Question: ${gameDataOutput[1]}`);
    const answer = readlineSync.question('Your answer: ');
    const wrongAnswer = () => {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
    };
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else return wrongAnswer();
  } return console.log(`Congratulations, ${name}!`);
};

export default logic;
