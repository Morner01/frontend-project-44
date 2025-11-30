import HelloUser from '../cli.js';
import startGame from '../index.js';

const startCalcGame = () => {
  const name = HelloUser();
  const description = 'What is the result of the expression?';
  let num = 0;
  const answer = () => {
    const numb1 = Math.floor(Math.random() * 15);
    const numb2 = Math.floor(Math.random() * 15);
    const operator = Math.floor(Math.random() * 3);
    let answerStr = '';

    if (operator === 0) {
      answerStr = `${numb1} + ${numb2}`;
      num = numb1 + numb2;
    } else if (operator === 1) {
      answerStr = `${numb1} - ${numb2}`;
      num = numb1 - numb2;
    } else {
      answerStr = `${numb1} * ${numb2}`;
      num = numb1 * numb2;
    }
    return { num, answerStr };
  };

  const wrong = (userAnswer, num) => `${userAnswer} is wrong answer ;(. Correct answer was ${num}. Let's try again, ${name}!`;

  startGame(description, answer, wrong, 3, name);
};

export default startCalcGame;
