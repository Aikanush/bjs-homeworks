//  Задание 1

class Weapon {
	constructor(name, attack, durability, range)
	this.name = name;
	this.attack = attack;
	this.durability = durability;
    this.range = range;
}

takeDamage(damage) {
	if (durability > damage) {
		return this.durability = durability - damage;
	} else if (durability < damage) {
		return 0;
	}
}