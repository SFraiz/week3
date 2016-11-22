var exampleArray = [2, -5, 10, 5, 4, -10, 0];
var results = process(exampleArray);
console.log(results);

function process(data){
	var positions = [];
	data.forEach (function(a, i) {
		data.forEach (function (b, j) {
			if (a + b === 0) {positions.push (i + "," + j)}
		});
	});
	console.log(positions) // repite por ejemplo (3,1) y (1,3)
	positions.forEach(function (a) {
		console.log("sumando estos numeros el resultados es 0: " + a)
	})
}

//sin repetir numeros, recorre el array desde el número que miramos hacia adelante
function process(data){
	var positions = [];
	data.forEach (function(a, i) {
		data.forEach (function (b, j) {
			if (j <= i) {
				if (a + b === 0) {positions.push (i + "," + j)}
			}
		});
	});
	console.log(positions) 
	positions.forEach(function (a) {
		console.log("sumando estos numeros el resultados es 0: " + a)
	})
}
