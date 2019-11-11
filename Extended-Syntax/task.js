
'use strict';

// Задание 1

function calculateQuadraticEquation(){
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a,b,c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = "+result;
}

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


// Задание 2

function calculateAverageRating(){
    let marks = window.marks.value.split("").map(Number).filter((n)=> !isNaN(n) && n > 0);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

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


// Задание 3

function calculateDrinkTask(){
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

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

