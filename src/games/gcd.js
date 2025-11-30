import helloUser from '../cli.js';
import startGame from '../index.js';

const NOD = (x, y) => {
  if (y > x) return NOD(y, x);
  if (!y) return x;
  return NOD(y, x % y);
};

const startGcdGame = () => {
  const name = helloUser();
  const description = 'Find the greatest common divisor of given numbers.';
  const answer = () => {
    const numb1 = Math.floor(Math.random() * 100);
    const numb2 = Math.floor(Math.random() * 100);
    const correctAnswer = NOD(numb1, numb2);
    return { num: `${numb1} ${numb2}`, answerStr: String(correctAnswer) };
  };
  const wrong = (userAnswer, correctAnswer) => `${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}. Let's try again, ${name}!`;
  startGame(description, answer, wrong, 3, name);
};

export default startGcdGame;
