import HelloUser from '../cli.js';
import startGame from '../index.js';

const startEvenGame = () => {
  const name = HelloUser();
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  const answer = () => {
    const num = Math.floor(Math.random() * 100);
    console.log(num);
    if (num % 2 === 0) {
      return 'yes';
    }
    return 'no';
  };
  const wrong = (userAnswer, correctAnswer) => `${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.
    Let's try again, ${name}!`;

  startGame(description, answer, wrong, 3, name);
};

export default startEvenGame;
