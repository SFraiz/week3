
function averageColom(numbers){
	if (!numbers) return 0; //si no nos dan numeros nos devuelve 0
	var numsArray = numbers.split(/[:&]/); //nos separa los numeros en cada simbolo :&
	var sum = numsArray.reduce(function(a, b) { return (parseInt(a) + parseInt(b))});
	var avg = sum / numsArray.length;
	console.log(avg);
	return avg;
}
var numbers = '80:70:90:100';
console.log( averageColom(numbers) === 85 );