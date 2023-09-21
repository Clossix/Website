function getPostDataChallenge(){

    for(var i = 0; i < document.getElementsByClassName("challenge-post").length; i++){
        let element = document.getElementsByClassName("challenge-post")[i];
        let number = element.id.substring(element.id.lastIndexOf('-') + 1)-1;
        /*
        element.getElementsByTagName("h2")[0].innerHTML;
        element.getElementsByClassName("post-author")[0].innerHTML;
        element.getElementsByClassName("post-text")[0].innerHTML;
        element.getElementsByClassName("post-img")[0].src;
        element.getElementsByClassName("post-date")[0].innerHTML;
        */

        
        if(JSON.parse(localStorage.getItem("likes"))[number] == true)
        {
            element.getElementsByClassName("post-likes")[0].innerHTML = parseInt(element.getElementsByClassName("post-likes")[0].innerHTML) + 1;
            element.getElementsByClassName("heart-icon")[0].src = "../assets/icons/icon-herz-colored.svg";
        }
        element.getElementsByClassName("post-comments")[0].innerHTML = JSON.parse(localStorage.getItem("comments"))[number].length;

    }
}