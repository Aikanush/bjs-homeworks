'use strict';

ffunction getSolution(a, b, c) {
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

showSolutionsMessage(1, 2, 3);
showSolutionsMessage(7, 20, -3);
showSolutionsMessage(2, 4, 2);

// Задание 2

function getAverageScore(data) {
	let data = {
		algebra: [2, 4, 5, 6, 5, 3],
		geometry: [5, 3, 5, 4],
		russian: [3, 4, 4, 2],
		physics: [5, 5],
		music: [5, 5, 3],
		englishe: [4, 5, 3, 3],
		poetry: [3, 4],
		chemistry: [ 2 ],
		french: [4, 4],
	}

	function getAverageArr(arr) {
		let total = 0;
		for (let i = 0; i < arr.length; i++) {
            total += 1;

            return {
            	total / arr.length;
            }
        }

	}
}
