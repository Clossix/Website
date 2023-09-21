import getUserData from "../scripts/user.js";
let currentUserData = getUserData();

//XP - Info
document.querySelector('.exp-txt').innerText = "LVL " + currentUserData.level;
document.querySelector('.cur-exp').innerText = currentUserData.currentExp + " / 2000";
//Name in Home Main - "Willkommen zurück xxx"
if(document.querySelector('.user-firstName')) document.querySelector('.user-firstName').innerText = currentUserData.firstName;
//Userdata
document.querySelector('.user-name-info').innerText = currentUserData.firstName + " " + currentUserData.lastName;
document.querySelector('.user-id-info').innerText = currentUserData.id;
document.querySelector('.user-age-info').innerText = currentUserData.age;
document.querySelector('.user-occupation-info').innerText = currentUserData.occupation;
document.querySelector('.user-occupationAct-info').innerText = currentUserData.occupationCat;

//Sound ON/OFF
btnSound(localStorage.getItem("Sound") );