import HelloUser from '../cli.js';
import startGame from '../index.js';

const primeNumber = (num) => {
  if (num <= 1) {
    return 'no';
  }

  for (let i = 2; i * i <= num; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }

  return 'yes';
};

const startPrimeGame = () => {
  const name = HelloUser();
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const answer = () => {
    const numb1 = Math.floor(Math.random() * 100);
    console.log(numb1);
    const correctAnswer = primeNumber(numb1);
    return correctAnswer;
  };
  const wrong = (userAnswer, correctAnswer) => `${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.
      Let's try again, ${name}!`;

  startGame(description, answer, wrong, 3, name);
};

export default startPrimeGame;
