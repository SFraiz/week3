var fs = require('fs');

function print (error, content) {
	console.log(content);
}

fs.readFile('file.txt', 'utf8', print); //print aquí sería el callback
console.log(1+1); //primero imprime el (1+1) y cuando termina de leer el .txt me lo devuelve


//la función que escribe la media del contenido llamando a la función que la calcula
function writeAverage(error, content) {
	averageColom(content);
}

//la función que calcula la media
function averageColom(numbers){
	if (!numbers) return 0; 
	var numsArray = numbers.split(/[:&]/);
	var sum = numsArray.reduce(function(a, b) { return (parseInt(a) + parseInt(b))});
	var avg = sum / numsArray.length;
	console.log(avg)
}

fs.readFile('file2.txt', 'utf8', writeAverage);



function writeArray(error, content){
	
}


fs.readFile('file3.txt', 'utf8', writeArray);