var Viking = require("./Viking.js");
var Pit = require("./Pit.js");

var Jonny = new Viking("Jonny", 50, 40)
var Jose = new Viking("Jose", 60, 50)

var Bernabeu = new Pit(Jonny, Jose, 10)
Bernabeu.startFight() //llama a la función y la ejecuta, sin los () no la ejecuta