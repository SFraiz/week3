var Question = require("./Question.js");
var Quiz = require("./Quiz.js");

var questions = []
questions.push(new Question('¿Cuál es el mejor equipo de futbol del mundo?', 'Barcelona', 1));
questions.push(new Question('¿Quién es el mejor jugador del mundo?', 'Messi', 2));
questions.push(new Question('¿Qué se quema?', 'Madrid', 3));


var QuizGame = new Quiz(questions)
QuizGame.startQuiz()