import readlineSync from 'readline-sync';

const startLogic = (rules, gameData) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(rules);

  for (let i = 1; i <= 3; i += 1) {
    const gameDataOutput = gameData();
    const correctAnswer = String(gameDataOutput[1]);
    console.log(`Question: ${gameDataOutput[0]}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
      return;
    }
  } console.log(`Congratulations, ${name}!`);
};

export default startLogic;
