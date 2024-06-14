import HelloUser from '../cli.js';
import startGame from '../index.js';

const generateProgression = (minLength = 3, maxLength = 10) => {
  const progressionLength = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
  const start = Math.floor(Math.random() * 99);
  const difference = Math.floor(Math.random() * 99);
  const hiddenElementIndex = Math.floor(Math.random() * progressionLength);

  let progression = [];
  for (let i = 0; i < progressionLength; i++) {
    progression.push(start + i * difference);
  }

  const hiddenElement = progression[hiddenElementIndex];
  progression[hiddenElementIndex] = '..';
  return { progression, hiddenElement };
}

const startProgressionGame = () => {
  const name = HelloUser();
  const description = 'What number is missing in the progression?';
  const answer = () => {
    const { progression, hiddenElement } = generateProgression();
    console.log(progression);
    return hiddenElement;
  };
  const wrong = (userAnswer, correctAnswer) => `${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.
        Let's try again, ${name}!`;
  startGame(description, answer, wrong, 3, name);
};

export default startProgressionGame;
