let startGame = () => console.log("This is a superhero assigner.");
startGame();

let goodGuys = [];

class Superhero {
	constructor(name, weapon) {
		this.name = name;
		this.weapon = weapon
	}
}

class addHero extends Superhero {
	constructor(name, weapon) {
		super(name, weapon);
	}
	strike() {
		console.log(this.name + ' hit you with the ' + this.weapon + ', BOO-YAH!!');
	}
}

function addToArray(hero) {
	goodGuys.push(hero);
}

let batman = new addHero('Batman', 'utility belt');
let thor = new addHero('Thor', 'hammer');
let ironman = new addHero('Ironman', 'hand cannon');
let superman = new addHero('Superman', 'lasers');
let spiderman = new addHero('Spiderman', 'web');

addToArray(batman);
addToArray(thor);
addToArray(ironman);
addToArray(superman);
addToArray(spiderman);

let randomizeHero = (heros) => {
	let number = Math.floor(Math.random() * 5)
	let heroChosen = heros[number].name;
	return heroChosen;
}

let greetHero2 = (heroName) => {
	console.log(`Your superhero is ${heroName}!`);
}

let whoIsIt = randomizeHero(goodGuys);

greetHero2(whoIsIt);

let [a, b, c, d, e] = goodGuys;

function hits(name) {
	switch(name) {
		case a.name:
			batman.strike();
			break;
		case b.name:
			thor.strike();
			break;
		case c.name:
			ironman.strike();
			break;
		case d.name:
			superman.strike();
			break;
		case e.name:
			spiderman.strike();
			break;
	}
}

hits(whoIsIt);



