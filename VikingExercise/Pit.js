var Pit = function(fighter_one, fighter_two, turns) {
	this.fighter_one = fighter_one;
	this.fighter_two = fighter_two;
	this.turns = turns;

	this.startFight = function () {
		for (var turns = 1; turns <= 11; turns++) {
		console.log('Round ' + turns + ', Fight!')
		this.fighter_one.health = this.fighter_one.health - this.fighter_two.strength*0.2
		this.fighter_two.health = this.fighter_two.health - this.fighter_one.strength*0.2
		console.log(this.fighter_one.name + "'s health now is " + this.fighter_one.health +
		' and ' + this.fighter_two.name + "'s health now is " + this.fighter_two.health + '.');
		}
	}
};

module.exports = Pit;