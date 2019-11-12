'use strict';

// Задание 1

function getSolution(a, b, c) {
	let Dis = b**2 - 4*a*c;
	if (Dis < 0) {
		return { 
			D: Dis,
		}
	}

	else if (Dis === 0) {
        let x1 = -b / (2*a);
        return {
        	roots: [x1],
        	D: Dis,
        }
	}

	else if (Dis > 0) {
		let x1 = (-b + Math.sqrt(Dis)) / (2*a);
		let x2 = (-b - Math.sqrt(Dis)) / (2*a);
		return {
        	roots: [x1, x2],
        	D: Dis,
        }
	}
}

function showSolutionsMessage(a, b, c) {
	let result = getSolution(a, b, c);
	console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
	console.log(`Значение дискриминанта: ${result.D}`);
	if (result.D < 0) {
		console.log(`Уравнение не имеет вещественных корней`);
	}
	else if (result.D === 0) {
		console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
	}
	else if (result.D > 0) {
		console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
	}

}

// Задание 2

function getAverageScore(data) {
  let result = {};
  result.average = 0;
  let i = 0;
	for (let prop in data) {
      let value = getAverageMark(data[prop])
      result[prop] = value;
      result.average += value;
      i++;
  }
  result.average /= i;
  return result;
}

function getAverageMark(data) {
    let total = 0;
    
    for (let i = 0; i < data.length; i++) {
      total += data[i];
    }
    return total / data.length;
}

// Задание 3

let result = {};
function getPersonData(secretData) {
	let value;
	for (let prop in secretData) {
		if (prop === 'aaa') {
			value = 'firtsname';
		} else {
			value ='lastname';
		}

		result[value] = getDataName(secretData);
	}
	return result;
}

function getDataName(secretData) {
	let value;
	for (let prop in secretData) {
		if (prop === 0) {
			value = 'Родриго';
		} else {
			value = 'Эмильо';
		}
	}
	return value;
}
