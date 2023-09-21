var currentLectureProgress = localStorage.getItem("lectureProgress");
let help = String(window.location);
let lastLectureNr = currentLectureProgress - 1;
var prevLectureUrl = help.replace(currentLectureProgress + ".html", lastLectureNr + ".html");

document.getElementById('backButton').addEventListener('click', function () {
    window.location.href = prevLectureUrl;
});

//blendet zurück-pfeil für erste lektion aus
var backButton = document.getElementById("backButton");

var currentLectureProgress;
//Localstorage
if(localStorage.getItem("lectureProgress") != ""){
    currentLectureProgress = localStorage.getItem("lectureProgress");
}
let nextLectureNr = currentLectureProgress - 1 + 2;
var nextLectureUrl = help.replace(currentLectureProgress + ".html", nextLectureNr + ".html");

if (currentLectureProgress < 2) {
    backButton.style.display = "none";
}

document.getElementById('nextLecture').addEventListener('click', function () {
    window.location.href = nextLectureUrl;
});

//audio player
const playBtn = document.getElementById('startAudioButton');
const pauseBtn = document.getElementById("pauseAudioButton");
const audioPart1 = document.getElementById("audio1");
const audioPart2 = document.getElementById("audio2");
var audioSetting = localStorage.getItem("Sound");
var isPlaying = new Boolean(false);
var partOneFinished = new Boolean(false);
checkAudio();

audioPart1.onended = function() {
    if (isPlaying == false) {
        pauseBtn.style.display = "none"; 
        playBtn.style.display = "flex";
    }
    partOneFinished = true;
}; 

function checkAudio(){
let audiocheck = localStorage.getItem("Sound");

    if (audiocheck == "true") {
        playAudio();
    }
}

function playAudio() {
    playBtn.style.display = "none";
    pauseBtn.style.display = "flex";
    if (partOneFinished == false) {
        audioPart1.play();
    } else {
        audioPart2.play();
    }
    isPlaying = true;
}

function pauseAudio() {
    pauseBtn.style.display = "none";
    playBtn.style.display = "flex";
    audioPart1.pause();
    audioPart2.pause();
    isPlaying = false;
}

var observer = new IntersectionObserver(function(entries) {
	if(entries[0].isIntersecting === true)
		if (isPlaying == true && partOneFinished == true){
            audioPart2.play();
        } else {
            audioPart2.pause();
        }
}, { root:null, rootMargin:'0px', threshold:0.9});

observer.observe(document.querySelector("#startAudio2"));

audioPart2.onended = function() {
    pauseBtn.style.display = "none"; 
    playBtn.style.display = "flex";
    partOneFinished = false;
}; 

//open popup at end
var popUp = document.getElementById("end-popup-outer");

var openPopUpBtn = document.getElementById("nextLecturePopUp");

openPopUpBtn.onclick = function() {
    popUp.style.display = "block";
}

// schließen des popups, wenn user außerhalb des bereichs klickt
window.onclick = function(event) {
  if (event.target == popUp) {
    popUp.style.display = "none";
  }
} 