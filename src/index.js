import readlineSync from 'readline-sync';

const startGame = (description, answer, wrong, rounds, name) => {
  let points = 0;
  console.log(description);
  for (let i = 0; i < rounds; i += 1) {
    const { num, answerStr } = answer();
    console.log(`Question: ${num}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === String(answerStr)) {
      points += 1;
      console.log('Correct!');
    } else {
      console.log(wrong(userAnswer, answerStr));
      return false; // Поражение
    }
  }
  if (points === rounds) {
    console.log(`Congratulations, ${name}!`);
    return true; // Победа
  }
  return false;
};
export default startGame;
