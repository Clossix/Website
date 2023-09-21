import getUserData from "../scripts/user.js";
let currentUserData = getUserData();

//Placeholder beim Login
document.getElementById("loginMail").placeholder = currentUserData.id;
document.getElementById("loginPass").placeholder = currentUserData.pw;