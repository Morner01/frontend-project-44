import readlineSync from 'readline-sync';

const startGame = (description, answer, wrong, rounds, name) => {
  let points = 0;
  for (let i = 0; i < rounds; i += 1) {
    const { num, answerStr } = answer();
    console.log(description);
    console.log(`Question: ${num}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === answerStr) {
      points += 1;
      console.log('Correct!');
    } else {
      console.log(wrong(userAnswer, answerStr));
      break;
    }
  }
  if (points === rounds) {
    console.log(`Congratulations, ${name}!`);
  }
};
export default startGame;
