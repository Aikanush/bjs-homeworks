function initCheckBirthday() {
    const birthday = document.getElementById('birthday').value;

    const result = checkBirthday(birthday) ? "Да" : "Нет";

    document.getElementById('disclaimer').innerHTML = result;   
}

function checkBirthday(birthday) {
    const now = new Date().getTime();
    const birthdayDate = new Date(birthday).getTime();
    const diff = now - birthdayDate;
    const age = diff / (1000 * 60 * 60 * 24 * 365.25);
    return age > 18;
}



function initPrintAnimalSound() {
    const animal = {
        sound: 'grrrr',
    };

    const result = getAnimalSound(animal);

    document.getElementById('sound').innerHTML = result;   
}

getAnimalSound.prototype = animal;

function getAnimalSound(animal) {
    if (animal === undefined) {
        return null;
    } else {
        return animal.sound;
    }

}

function initCalculateStatement() {
    for (let idx = 0; idx < 3; idx++) {
        const marks = document.getElementById('learner-' + idx).value.split(',');

        const average = getAverageMark(marks);

        document.getElementById('learner-' + idx + '-average').innerHTML = average;
    }
}

function getAverageMark(marks) {
  let total = 0;
  for (let i = 0; i < marks.length; i++) {
      total += parseInt(marks[i], 10);
    }
    let average = total / marks.length;
    let roundedAverage = Math.round(average);
     return roundedAverage;
}








