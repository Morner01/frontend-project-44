import HelloUser from '../cli.js';
import startGame from '../index.js';

const startCalcGame = () => {
  const name = HelloUser();
  const description = 'What is the result of the expression?';

  const answer = () => {
    const numb1 = Math.floor(Math.random() * 15);
    const numb2 = Math.floor(Math.random() * 15);
    const operator = Math.floor(Math.random() * 3);
    let questionStr = '';
    let answerNum = 0;

    if (operator === 0) {
      questionStr = `${numb1} + ${numb2}`;
      answerNum = numb1 + numb2;
    } else if (operator === 1) {
      questionStr = `${numb1} - ${numb2}`;
      answerNum = numb1 - numb2;
    } else {
      questionStr = `${numb1} * ${numb2}`;
      answerNum = numb1 * numb2;
    }

    return { num: questionStr, answerStr: answerNum };
  };

  const wrong = (userAnswer, correctAnswer) => `${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}. Let's try again, ${name}!`;

  startGame(description, answer, wrong, 3, name);
};

export default startCalcGame;
