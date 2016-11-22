var read = require('read');

var Quiz = function (){
	options = {
    	prompt: "What's your name?\n>"
	}
// Our options object, the prompt is simply what will appear in the command line when read is called
	read(options, displayName);
// The prompt itself, passing options, and using our callback function after input
    function displayName (err, name){	
    	if (name.replace(/\b\w/g, l => l.toUpperCase()) === 'Sergi') {
    		console.log("Your name is: " + name.replace(/\b\w/g, l => l.toUpperCase()))
    		read(options2, displayCity)
    	}
    	else {
    		console.log(name.replace(/\b\w/g, l => l.toUpperCase()) + '? Vaya mierda de nombre!')
    		read(options, displayName)
    	}
    }
    options2 = {
    	prompt: "Where do you live?\n>"
	}
	function displayCity (err, city){	
    	if (city.replace(/\b\w/g, l => l.toUpperCase()) === 'Barcelona') {
    		console.log(city.replace(/\b\w/g, l => l.toUpperCase()) + "?! Que ciudad más bonita!")
    	}
    	else {
    		console.log(city.replace(/\b\w/g, l => l.toUpperCase()) + '? Vaya mierda de ciudad!')
    		read(options2, displayCity)
    	}
    }
}

Quiz()

//module.exports = Quiz;