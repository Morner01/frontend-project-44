import readlineSync from 'readline-sync';

const HelloUser = () => {
  // eslint-disable-next-line no-console
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  // eslint-disable-next-line no-console
  console.log(`Hello, ${name}!`);
  // eslint-disable-next-line no-console
  return name;
};
export default HelloUser;
