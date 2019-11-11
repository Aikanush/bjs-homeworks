
'use strict';

// Задание 1

function getResult(a, b, c) {
    let D = b**2 - 4*a*c;
    let arr = [];

    if (D > 0) {
        arr[0] = (-b + Math.sqrt(D)) / (2*a);
        arr[1] = (-b - Math.sqrt(D)) / (2*a);
        return arr[0, 1];
    }

    else if (D = 0) {
        arr[0] = -b / (2*a)
        return arr[0]

    }

    else {
        return arr;
    }

}

console.log(getResult(2, 6, 5));

// Задание 2

function getAverageMark(marks) {
  let total = 0;
  if (marks.length > 5) {
    marks.splice(5);
    console.log(`Среднее значение первых 5 оценок:`);
  }
  for (let i = 0; i < marks.length; i++) {
      total += marks[i];
    }
    console.log(total / marks.length);
}

getAverageMark([2, 4, 5, 4, 4, 5]);

// Задание 3

function askDrink(name, dateOfBirthday) {
  let today = new Date().getFullYear();
  let birthdayYear = new Date(dateOfBirthday).getFullYear();
    let age = today - birthdayYear;
  let text;
    if (age >= 18) {
        text = `Не желаете ли олд-фэшн, ${name}?`;
    } else {
        text = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    }
  return text;
}
console.log(askDrink('Aykansuh', new Date(2005, 17, 10)));
