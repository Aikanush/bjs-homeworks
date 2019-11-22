//  Задание 1

class Weapon {
	constructor(name, attack, durability, range) {
	this.name = name;
	this.attack = attack;
	this.durability = durability;
    this.range = range;
    const durablityFirst = durability;
  }


  takeDamage(damage) {
	  if (this.durability >= damage) {
		 return this.durability = this.durability - damage;
	  }  else {
		 return this.durability = 0;
	  } 
  }

  getDamage() {
	   if (this.durability >= this.durabilityFirst * 0.3) {
		    return this.attack;
	   } else if (this.durability === 0) {
		    return this.durability = 0;
	   } else {
		    return this.attack / 2;
	   }
  }

  isBroken() {
	   return this.durability <= 0;
  }
}


const arm = new Weapon('Рука', 1, Infinity, 1);
const bow = new Weapon('Лук', 10, 200, 3);
const sword = new Weapon('Меч', 25, 500, 1);
const knife = new Weapon('Нож', 5, 300, 1);
const stick = new Weapon('Посох', 8, 300, 2);

// Задание 2

class Arm extends Weapon {
	constructor(name = 'Рука', attack = 1, durability = Infinity, range = 1) {
		super(name, attack, durability, range);
		
	}
}

const Arm2 = new Arm();

class Bow extends Weapon {
	constructor(name = 'Лук', attack = 10, durability = 200, range = 3) {
		super(name, attack, durability, range);
		
	}
}

const Bow2 = new Bow();

class Sword extends Weapon {
	constructor(name = 'Меч', attack = 25, durability = 500, range = 1) {
		super(name, attack, durability, range);
		
	}
}

const Sword2 = new Sword();

class Knife extends Weapon {
	constructor(name = 'Нож', attack = 5, durability = 300, range = 1) {
		super(name, attack, durability, range);
		
	}
}

const Knife2 = new Knife();

class Stick extends Weapon {
	constructor(name = 'Посох', attack = 8, durability = 300, range = 2) {
		super(name, attack, durability, range);
		
	}
}

const Stick2 = new Stick();

class longBow extends Bow {
	constructor(name = 'Длинный лук', attack = 15, durability, range = 4) {
		super(name, attack, durability, range);
		
	}
}

const longBow2 = new longBow();

class Poleax extends Sword {
	constructor(name = 'Секира', attack = 27, durability = 800, range) {
		super(name, attack, durability, range);
		
	}
}

const Poleax2 = new Poleax();

class stickStorm extends Stick {
	constructor(name = 'Посох Бури', attack = 10, durability, range = 3) {
		super(name, attack, durability, range);
		
	}
}

const stickStorm2 = new stickStorm();

//  Задание 3

class StudentLog {
	constructor(name) {
		this.name = name;
		this.obj = {};
	}

	getName() {
		return this.name;
	}

	addGrade(grade, subject) {
		if (grade > 0 && grade <= 5) {
      if (this.obj[subject] === undefined) {
        this.obj[subject] = [];
      }
      this.obj[subject].push(grade);
      return this.obj[subject].length;
    } else {
      if (this.obj[subject] === undefined) {
      return 0;
      }
      console.log(`Вы пытались поставить оценку ${grade} по предмету ${subject}. Допускаются только числа от 1 до 5.`);
			return this.obj[subject].length;
    }
	}

	getAverageBySubject(subject) {
		let sum = 0;
		for (let i = 0; i < this.obj[subject].length; i++) {
			sum += this.obj[subject][i];
		}
    console.log(sum / this.obj[subject].length);
    if (this.obj[subject] === undefined) {
      return 0;
    }
	}

  getTotalAverage() {
    let i = 0;
    let average = 0;
	  for (let prop in this.obj) {
      let value = this.getAverageBySubject(prop);
      average += value;
      i++;
    }
    retrun (average /= i);
  }
}







