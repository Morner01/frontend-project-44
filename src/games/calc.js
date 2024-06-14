/* eslint-disable eqeqeq */
// import readlineSync from 'readline-sync';
import HelloUser from '../cli.js';
import startGame from '../index.js';

const startCalcGame = () => {
  const name = HelloUser();
  const description = 'What is the result of the expression?';
  const answer = () => {
    let correctAnswer = 0;
    const numb1 = Math.floor(Math.random() * 15);
    const numb2 = Math.floor(Math.random() * 15);
    let operator = 0;
    operator = Math.floor(Math.random() * 3);
    if (operator === 0) {
      console.log(`${numb1} + ${numb2}`); // вопрос игры
      correctAnswer = numb1 + numb2; // правильный ответ
    } else if (operator === 1) {
      console.log(`${numb1} - ${numb2}`); // вопрос игры
      correctAnswer = numb1 - numb2; // правильный ответ
    } else if (operator === 2) {
      console.log(`${numb1} * ${numb2}`); // вопрос игры
      correctAnswer = numb1 * numb2; // правильный ответ
    }
    return correctAnswer;
  };
  const wrong = (userAnswer, correctAnswer) => `${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.
Let's try again, ${name}!`;
  startGame(description, answer, wrong, 3, name);
};
export default startCalcGame;
