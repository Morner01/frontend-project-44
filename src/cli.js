import readlineSync from 'readline-sync';

const HelloUser = () => {
  // eslint-disable-next-line no-console
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  // eslint-disable-next-line no-console
  console.log(`Hello, ${name}!`);
  // eslint-disable-next-line no-console
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  // eslint-disable-next-line no-unused-vars
  const random = Math.floor(Math.random() * 100);
  // eslint-disable-next-line no-console
  // first-question
  console.log(`Question: ${random}`);
  // eslint-disable-next-line no-unused-vars, no-undef
  const Question = readlineSync.question('Your answer: ');
  if (random % 2 === 0 && Question === 'yes') {
  // eslint-disable-next-line no-console
    console.log('Correct!');
  } else if ((random % 2 !== 0 && Question === 'yes')) {
  // eslint-disable-next-line no-console
    console.log(`${Question} is wrong answer ;(. Correct answer was 'no'.
  Let's try again, ${name}`);
    process.exit();
  } else if ((random % 2 !== 0 && Question === 'no')) {
    // eslint-disable-next-line no-console
    console.log('Correct!');
  } else if (random % 2 === 0 && Question === 'no') {
    console.log(`${Question} is wrong answer ;(. Correct answer was 'yes'.
  Let's try again, ${name}`);
    process.exit();
}
  // eslint-disable-next-line no-unused-vars
  const random2 = Math.floor(Math.random() * 100);
  // eslint-disable-next-line no-console
  // second-question
  console.log(`Question: ${random2}`);
  // eslint-disable-next-line no-unused-vars, no-undef
  const Question2 = readlineSync.question('Your answer: ');
  if (random2 % 2 === 0 && Question2 === 'yes') {
  // eslint-disable-next-line no-console
    console.log('Correct!');
  } else if ((random2 % 2 !== 0 && Question2 === 'yes')) {
  // eslint-disable-next-line no-console
    console.log(`${Question2} is wrong answer ;(. Correct answer was 'no'.
  Let's try again, ${name}`);
    process.exit();
  } else if ((random2 % 2 !== 0 && Question2 === 'no')) {
    // eslint-disable-next-line no-console
    console.log('Correct!');
  } else if (random2 % 2 === 0 && Question2 === 'no') {
    console.log(`${Question2} is wrong answer ;(. Correct answer was 'yes'.
  Let's try again, ${name}`);
    process.exit();
}
// eslint-disable-next-line no-unused-vars
  const random3 = Math.floor(Math.random() * 100);
  // eslint-disable-next-line no-console
  // third-question
  console.log(`Question: ${random3}`);
  // eslint-disable-next-line no-unused-vars, no-undef
  const Question3 = readlineSync.question('Your answer: ');
  if (random3 % 2 === 0 && Question3 === 'yes') {
  // eslint-disable-next-line no-console
    console.log('Correct!');
    console.log(`Congratulations, ${name}!`);
} else if ((random3 % 2 !== 0 && Question3 === 'yes')) {
  // eslint-disable-next-line no-console
    console.log(`${Question2} is wrong answer ;(. Correct answer was 'no'.
Let's try again, ${name}`);
    process.exit();
} else if ((random3 % 2 !== 0 && Question3 === 'no')) {
  // eslint-disable-next-line no-console
    console.log('Correct!');
    console.log(`Congratulations, ${name}!`);
} else if (random3 % 2 === 0 && Question3 === 'no') {
    console.log(`${Question2} is wrong answer ;(. Correct answer was 'yes'.
Let's try again, ${name}`);
    process.exit();
}
};
export default HelloUser;
