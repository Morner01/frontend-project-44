/* eslint-disable eqeqeq */
/* eslint-disable no-use-before-define */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
import readlineSync from 'readline-sync';
// eslint-disable-next-line import/no-unresolved
/* eslint-disable no-unused-vars */

// все начинается с выявления общей логики игр

// игры отличаются:
// 1) описанием
// 2) вопросом и ответами

// // сначала делаем переменную с кол-вом раундов

//  логика
// привет в брейн-геймс
// - who are you?
//  - *описание игры*

// запускаем цикл который длится столько-то  раундов:
// 1) вопрос
// 2) проверка сравнение ответа пользователя
// и ответа правильного
// 3) если все плохо - попробуй ещё раз
// 4) если все хорошо - поздравляю
// description; // принимаю описание игры
// answer; // правильный ответ
// wrong; // ошибка
// correct; // правильно
// rounds // кол-во раундов
const startGame = (description, answer, wrong, rounds, name) => {
  console.log(description); // тут вывести описание игры
  let points = 0;
  for (let i = 0; i < rounds; i += 1) {
    const temp = answer();
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer == temp) { //
      points += 1;
      console.log('Correct!');
    } else if (userAnswer !== temp) {
      console.log(wrong(userAnswer, temp));
      break;
    }
  }
  if (points === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default startGame;
// hi 2025