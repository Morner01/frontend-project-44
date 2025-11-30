import helloUser from '../cli.js';
import startGame from '../index.js';

const startEvenGame = () => {
  const name = helloUser();
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';

  let currentNumber = 0;
  let correctAnswer = '';

  const answer = () => {
    currentNumber = Math.floor(Math.random() * 100);
    correctAnswer = (currentNumber % 2 === 0) ? 'yes' : 'no';
    return { num: currentNumber, answerStr: correctAnswer };
  };

  const wrong = (userAnswer, correctAnswer) => `${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}. Let's try again, ${name}!`;

  startGame(description, answer, wrong, 3, name);
};

export default startEvenGame;
