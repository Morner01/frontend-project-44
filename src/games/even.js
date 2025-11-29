import HelloUser from '../cli.js';
import startGame from '../index.js';

const startEvenGame = () => {
  const name = HelloUser();

  const getQuestionAndAnswer = () => {
    const num = Math.floor(Math.random() * 100);
    const question = `Answer "yes" if the number is even, otherwise answer "no": ${num}`;
    const correctAnswer = (num % 2 === 0) ? 'yes' : 'no';
    return { question, correctAnswer };
  };

  const description = () => {
    const { question } = getQuestionAndAnswer();
    return question;
  };

  const answer = () => {
    const { correctAnswer } = getQuestionAndAnswer();
    return correctAnswer;
  };

  const wrong = (userAnswer, correctAnswer) => `${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}. Let's try again, ${name}!`;

  startGame(description, answer, wrong, 3, name);
};
export default startEvenGame;
