function loadData(){
    document.getElementById("post-title").innerHTML = localStorage.getItem("post-title");
    document.getElementById("post-text").innerHTML = localStorage.getItem("post-text");
    document.getElementById("post-img").src = localStorage.getItem("post-img");
    /*
    document.getElementById("post-img").src = 
        "../assets/pictures/posts/" + localStorage.getItem("post-img").substring(localStorage.getItem("post-img").lastIndexOf('/') + 1);
        */
    document.getElementById("post-author").innerHTML = localStorage.getItem("post-author");
    document.getElementById("post-date").innerHTML = localStorage.getItem("post-date");

    //likes
    document.getElementById("post-likes").innerHTML = localStorage.getItem("post-likes");

    if(JSON.parse(localStorage.getItem("likes"))[localStorage.getItem("current-post-id")] == true)
        {
            document.getElementById("post-likes-icon").src = "../assets/icons/icon-herz-colored.svg";
            document.getElementById("post-likes").style.color = "#ea9d03";
        }


    //comments
    document.getElementById("post-comments").innerHTML = localStorage.getItem("post-comments");
    let comments = JSON.parse(localStorage.getItem("comments"))[localStorage.getItem("current-post-id")];

    for(var i = 0; i < comments.length; i++){
        let author = comments[i].split(" | ")[0];
        let text = comments[i].split(" | ")[1];

        loadComment(author, text);
    } 

}

function loadComment(author, text){

    document.getElementById("comment-section").innerHTML += 
        "<div class='comment'>"
            + "<div class='comment-author'>"
                + "<img src='../assets/pictures/commenters/" + author + ".jpg'>"
                + "<p><b>" + author + "</b></p>"
            + "</div>"
            + "<p class='comment-text'>" + text + "</p>"
        + "</div>"
    
}

function handleKeyDown(event){
    if (event.key === "Enter") {
        addComment("ich", event.target.value);
        event.target.innerHTML = "";
        event.target.blur();
    }
}

function addComment(author, text){
    let comments = JSON.parse(localStorage.getItem("comments"));
    comments[localStorage.getItem("current-post-id")].push(author + " | " + text);
    localStorage.setItem("comments", JSON.stringify(comments));

    document.getElementById("post-comments").innerHTML = parseInt(document.getElementById("post-comments").innerHTML) + 1;

    loadComment(author, text);
}

function makeLike(element){

    let likes = JSON.parse(localStorage.getItem("likes"));

    if(!likes[localStorage.getItem("current-post-id")]){

        likes[localStorage.getItem("current-post-id")] = true;

        localStorage.setItem("likes", JSON.stringify(likes));
    
        element.getElementsByTagName("p")[0].innerHTML = parseInt(element.getElementsByTagName("p")[0].innerHTML) + 1;
        element.getElementsByTagName("img")[0].src = "../assets/icons/icon-herz-colored.svg";
        document.getElementById("post-likes").style.color = "#ea9d03";
    }
    else{
        likes[localStorage.getItem("current-post-id")] = false;

        localStorage.setItem("likes", JSON.stringify(likes));
    
        element.getElementsByTagName("p")[0].innerHTML = parseInt(element.getElementsByTagName("p")[0].innerHTML) - 1;
        element.getElementsByTagName("img")[0].src = "../assets/icons/icon-herz.svg";
        document.getElementById("post-likes").style.color = "";
    }

}

function goBack(){
    window.open(localStorage.getItem("goBackLocation"), "_self");
}