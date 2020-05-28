
function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;
	var question6 = document.quiz.question6.value;
	var question7 = document.quiz.question7.value;
	var question8 = document.quiz.question8.value;
	var question9 = document.quiz.question9.value;
	var question10 = document.quiz.question10.value;
	
	var correct = 0;

	if (question1 == "A") {
		correct++;
}
	if (question2 == "N") {
		correct++;
}	
	if (question3 == "O") {
		correct++;
}
	if (question4 == "T") {
		correct++;
}	
	if (question5 == "C") {
		correct++;
}	
	if (question6 == "V") {
		correct++;
}	
	if (question7 == "P") {
		correct++;
}	
	if (question8 == "Z") {
		correct++;
}	
	if (question9 == "M") {
		correct++;
}	
	if (question10 == "U") {
		correct++;
}	

	var pictures = ["img/exelente.jpg", "img/buena.jpg", "img/medio.jpg", "img/malo.jpg"];
	var score;

	if (correct == 0) {
		score = 3;
	}

	if (correct > 0 && correct < 7) {
		score = 2;
	}
	
	if (correct > 6 && correct < 10) {
		score = 1;
	}

	if (correct == 10) {
		score = 0;
	}

	document.getElementById("after_submit").style.visibility = "visible";


	document.getElementById("number_correct").innerHTML = "Tienes " + correct + " respuestas correctas.";
	document.getElementById("picture").src = pictures[score];
	window.scrollTo({ top: 0, behavior: 'smooth' });
	}
	
