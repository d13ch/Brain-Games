#!/usr/bin/env node
import readlineSync from 'readline-sync';

const brainEven = () => {
  const num1 = Math.floor(Math.random() * 100) + 1;
  const num2 = Math.floor(Math.random() * 100) + 1;
  const num3 = Math.floor(Math.random() * 100) + 1;
  const correctAnswer = (num) => {
    if (num % 2 === 0) {
      return 'yes';
    } return 'no';
  };

  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const wrongAnswer = (answer, num) => {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer(num)}'.\nLet's try again, ${name}!`);
  };

  console.log(`Question: ${num1}`);
  const answer1 = readlineSync.question('Your answer: ');
  if (answer1 === 'yes' && num1 % 2 === 0) {
    console.log('Correct!');
  } else if (answer1 === 'no' && num1 % 2 !== 0) {
    console.log('Correct!');
  } else {
    return wrongAnswer(answer1, num1);
  }

  console.log(`Question: ${num2}`);
  const answer2 = readlineSync.question('Your answer: ');
  if (answer2 === 'yes' && num2 % 2 === 0) {
    console.log('Correct!');
  } else if (answer2 === 'no' && num2 % 2 !== 0) {
    console.log('Correct!');
  } else {
    return wrongAnswer(answer2, num2);
  }

  console.log(`Question: ${num3}`);
  const answer3 = readlineSync.question('Your answer: ');
  if (answer3 === 'yes' && num3 % 2 === 0) {
    console.log('Correct!');
  } else if (answer3 === 'no' && num3 % 2 !== 0) {
    console.log('Correct!');
  } else {
    return wrongAnswer(answer3, num3);
  }

  return `Congratulations, ${name}!`;
};

brainEven();

export default brainEven;
