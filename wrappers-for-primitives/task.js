'use strict';

function calculateMortgage() {
    let percent = window.percent.value;
    let contribution = window.contribution.value;
    let amount = window.amount.value;
    let date = window.date.value;

    let result = calculateTotalMortgage(percent, contribution, amount, date);
    let span = window.mortageResult;
    span.textContent = result;
}

function calculateTotalMortgage(percent, contribution, amount, date) {

    if (typeof percent != "number") {
      retrun `Параметр "Процентная ставка" содержит неправильное значение ${percent}`
    } else if (typeof contribution != "number") {
      retrun `Параметр "Первоначальный взнос" содержит неправильное значение ${contribution}`
    } else if (typeof amount != "number") {
      retrun `Параметр "Сумма кредита" содержит неправильное значение ${amount}`
    }  else if (typeof date != "number") {
      retrun `Параметр "Срок кредита" содержит неправильное значение ${date}`
    } 
    
    function getMonthsOfDate(date) {
      let date1 = new Date();
      let date2 = new Date(date);
      let years = date1.getFullYear() - date2.getFullYear();
      let month = date1.getMonth() - date2.getMonth();
      let months = (years * 12) + month;
      return months;
      if (months < 0){
          return `Ошибка`;
      }
    }

    let P = percent / 12;
    let n = getMonthsOfDate(date);
    let payment = (amount - contribution) * (P + P / (((1 + P) ^ n) - 1));

    let totalAmount = payment * n;

    return totalAmount.toFixed(2);
}

function sayHello() {
    let name = window.personName.value;
    let greeting = getGreeting(name);
    let span = window.helloResult;
    span.textContent = greeting;
}

function getGreeting(name) {
    let greeting; 
    if ( name == null || name == undefined || name == "") {
        greeting = `Привет, Мир! Меня зовут Аноним`;
        return greeting;
    } else {
        greeting = `Привет, Мир! Меня зовут ${name}`;
        return greeting;
    }
}

 // console.log(getGreeting(""));