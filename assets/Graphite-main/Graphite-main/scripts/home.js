function showPopup(popupClass){
	
	document.querySelector(".popup-outer-wrapper").style.display="block";
	document.querySelectorAll(".popup-inner-wrapper").forEach((popup) => { popup.style.display = "none"; });
	document.querySelector("." + popupClass).style.display="block";

	return false;
}

function closePopup(){
	document.querySelector(".popup-outer-wrapper").style.display="none";
	return false;
}

function soundSwitch(){
    let status_sound = localStorage.getItem("Sound");
    if(status_sound == "true"){
        localStorage.setItem("Sound", "false");
        status_sound = "false";
        btnSound(status_sound);
        //alert("Sound aus");
        
    }
    else if(status_sound == "false"){
        localStorage.setItem("Sound", "true");
        status_sound = "true";
        btnSound(status_sound);
        //alert("Sound ein");
    }
    else{
        localStorage.setItem("Sound", "false");
        status_sound = "false";
        btnSound(status_sound);
        //alert("Sound aus");
    }
}

function btnSound(text_sound){
    if(text_sound == "true"){
        document.getElementById("btnsettings").value = "Autoplay (ON)";
    }
    else {
        document.getElementById("btnsettings").value = "Autoplay (OFF)";
    }
}

function onceAvailable(name, callback) {
    var interval = 10; // ms
    window.setTimeout(function() {
        if (window[name]) {
            callback(window[name]);
        } else {
            onceAvailable(name, callback);
        }
    }, interval);
}

//back to top Button
toTopBtn = document.getElementById("toTopBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        toTopBtn.style.display = "block";
    } else {
        toTopBtn.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 

function resetIntroLoad(){
    alert("Intro wurde zurückgesetzt");
    localStorage.setItem("intro", "true");
}