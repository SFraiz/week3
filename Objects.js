var Car = function(model, noise) {
	this.model = model;
	this.noise = noise;
	this.number_of_wheels = 4;
};
Car.prototype.makeNoise = function () {
	console.log(this.noise + "!!!!");
};

var car = new Car("Seat","Puta Real Madrid" );

car.makeNoise()

var Lluis = function(altura, peso, color_pelo) {
	this.altura = altura;
	this.peso = peso;
	this.color_pelo = color_pelo;

	this.decirTonterias = function () {
		console.log("El Betis es el mejor equipo de la ciudad");
	}
};

var Lluis = new Lluis("1,90", "90", "moreno")
Lluis.decirTonterias()