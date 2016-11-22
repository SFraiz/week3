var read = require('read');

var Quiz = function (quizquestion,score){
    this.quizquestion = quizquestion;
    this.score        = 0
    this.index        = 0

    this.startQuiz = function(){
        
    var options = {
        prompt: this.quizquestion[this.index].text
    }
        read(options, this.checkAnswer.bind(this));
    }     
    this.checkAnswer = function(err, gets){
    	if (gets.replace(/\b\w/g, l => l.toUpperCase()) === this.quizquestion[this.index].answer) {
    		this.index++;
            this.score++;
            console.log('Correcto!');
            console.log('Tu puntuación es: ' + this.score)
            
            if (this.index < this.quizquestion.length)
                this.startQuiz();
            else {
                console.log('Congratulations! You have finish QuizGame!')
                console.log('Tu puntuación es: ' + this.score)
            }
    	}
    	else {
            this.score--
    		console.log(gets.replace(/\b\w/g, l => l.toUpperCase()) + ' no es la respuesta correcta')
            console.log('Tu puntuación es: ' + this.score)
    		this.startQuiz();
    	}
    }
}


module.exports = Quiz;