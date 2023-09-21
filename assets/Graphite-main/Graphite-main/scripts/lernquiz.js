
/* Popup für Lernquiz*/
function showPopupquiz(){
	
	document.querySelector(".popup-quiz").style.display="block";

	var answer11 = document.getElementById('answer-1-1').checked;
	var answer12 = document.getElementById('answer-1-2').checked;
	var answer13 = document.getElementById('answer-1-3').checked;
	var prozent = 0;
	var text_wechsel = "Das war ein guter Versuch. Schau dir trotzdem deine Fehler genau an und wiederhole bei Bedarf das Quiz.";
	if(answer11 == false && answer12 == true && answer13 == false) {
		document.querySelector(".lernquiz-loesung .area1").style.border="solid 2px green";
		prozent = prozent + 33;

	} else {
		document.querySelector(".lernquiz-loesung .area1").style.border="solid 2px red";
	}


	var answer21 = document.getElementById('answer-2-1').checked;
	var answer22 = document.getElementById('answer-2-2').checked;
	var answer23 = document.getElementById('answer-2-3').checked;

	if(answer21 == true && answer22 == false && answer23 == false) {
		document.querySelector(".lernquiz-loesung .area2").style.border="solid 2px green";
		prozent = prozent + 33;

	} else {
		document.querySelector(".lernquiz-loesung .area2").style.border="solid 2px red";
	}

	var answer31 = document.getElementById('answer-3-1').checked;
	var answer32 = document.getElementById('answer-3-2').checked;
	var answer33 = document.getElementById('answer-3-3').checked;
	var answer34 = document.getElementById('answer-3-4').checked;
	var answer35 = document.getElementById('answer-3-5').checked;

	if(answer31 == true && answer32 == true && answer33 == false && answer34 == true && answer35 == false) {
		document.querySelector(".lernquiz-loesung .area3").style.border="solid 2px green";
		prozent = prozent + 33;

	} else {
		document.querySelector(".lernquiz-loesung .area3").style.border="solid 2px red";
	}
	if(prozent == 99){
		prozent = 100;
		text_wechsel = "Super gemacht! Du hast alle Fragen richtig beantwortet.";
		document.querySelector(".img").style.display="block";
	}
	else{
		document.querySelector(".img").style.display="none";
	}
	document.getElementById("text_wechsel").innerHTML = text_wechsel;
	document.getElementById("prozent").innerHTML = prozent + "%";
	return false;
}

function closePopupquiz(){
	document.querySelector(".popup-quiz").style.display="none";
	return false;
}






	