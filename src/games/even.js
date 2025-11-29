import HelloUser from '../cli.js';
import startGame from '../index.js';

const startEvenGame = () => {
  const name = HelloUser();

  const getQuestionAndAnswer = () => {
    const num = Math.floor(Math.random() * 100);
    const question = `Question: ${num}`; // Только вопрос
    const correctAnswer = (num % 2 === 0) ? 'yes' : 'no';
    return { question, correctAnswer };
  };

  let currentQuestionData = null;

  const description = () => {
    // Генерируем один вопрос и сохраняем его
    currentQuestionData = getQuestionAndAnswer();
    return currentQuestionData.question;
  };

  const answer = () => {
    // Используем сохранённый правильный ответ
    return currentQuestionData.correctAnswer;
  };

  const wrong = (userAnswer, correctAnswer) => `${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}. Let's try again, ${name}!`;

  startGame(description, answer, wrong, 3, name);
};
export default startEvenGame;
