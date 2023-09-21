function clearTheStorage(){
    localStorage.clear();
    window.location.reload();
}


if(!localStorage.getItem("load")){

    //Attention: Do not calculate with:
    //let postamount = document.getElementsByClassName("community-post").length;
    //localStorage.setItem("base-post-amount", postamount);
    localStorage.setItem("base-post-amount", 11);
    
    //My Posts (emtpy at the beginning, but has to be initialized)
    let myPosts = []
    localStorage.setItem("myPosts", JSON.stringify(myPosts));
    localStorage.setItem("numberOfMyPosts", 0);
    
    //comments
    let comments = [];

    comments.push(["bella | Tolle Zeichnung Ricky", "kamir | Love it <img width='10' src='../assets/icons/icon-herz.svg'>"]);
    comments.push(["ricky | Nicht schlecht. Schattierung könnte besser sein.", "felx | Finde ich auch! Tinte vezeiht dir leider nicht!", "ricky | Tipp: Teste die Schattierung auf einem extra Blatt Papier. Oder zeichne am PC :P"]);
    comments.push(["ricky | WTF? Was hast du gegen Manga?", "mac | Manga Hater..", "kamir | Ich mag Manga und Kissen :)", "bella | lol"]);
    comments.push(["bella | Man erkennt das Holz", "mac | Hier fehlt mir etwas Kontrast, aber sieht trotzdem gut aus.", "ricky | Not bad"]);
    comments.push(["kamir | scaaary", "felx | Sieht gut aus! Würde ich als Profilbild machen!", "ricky | Gut, aber die vordere Flosse sieht komisch aus."]);
    comments.push(["mac | Gut gemacht!", "felx | Ich habe so eine ähnliche Zeichnung auch mal gemacht."]);
    comments.push(["ricky | Habe ich mal im Studium machen müssen.", "kamir | Sieht schwierig aus.", "mac | Der Occlussion Shadow könnte etwas stärker und detaillierter sein, aber sonst echt gut."]);
    comments.push(["kamir | Mag ich sehr", "mac | nice!", "bella | Eventuell fehlt hier noch der Schlagschatten.."]);
    comments.push(["felx | Jeder hat Probleme mit Hände!", "ricky | Ich nicht", "bella | Online findest man echt gute Tutorials", "ricky | Spaß, ich auch"]);
    comments.push(["ricky | Sieht gut aus. Wenn du davor die Lichtquellen einzeichnest, könntest du genauer schattieren."]);
    comments.push(["ricky | Heftige Zeichnung für 10 Tage mit der App", "felx | Wow erst 10 Tage? Bleib dran!", "mac | Man erkennt sogar das Pfandzeichen."]);

    localStorage.setItem("comments", JSON.stringify(comments));

    //likes
    let likes = [];

    for(var i = 0; i < localStorage.getItem("base-post-amount"); i++){
        likes.push(false);
    }

    localStorage.setItem("likes", JSON.stringify(likes))

    localStorage.setItem("load", true);

}



function getPostData(){

    for(var i = 0; i < localStorage.getItem("numberOfMyPosts"); i++){
        loadNewPost(i);
    }

    for(var i = 0; i < document.getElementsByClassName("community-post").length; i++){
        let element = document.getElementsByClassName("community-post")[i];
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
            element.getElementsByTagName("img")[1].src = "../assets/icons/icon-herz-colored.svg";
        }
        element.getElementsByClassName("post-comments")[0].innerHTML = JSON.parse(localStorage.getItem("comments"))[number].length;

    }

    if(window.location.pathname.includes("community-mydrawings.html")){
        
        //for mydrawings
        handlePlaceholder();
    }
}

function openPost(element){

    localStorage.setItem("current-post-id", element.id.substring(element.id.lastIndexOf('-') + 1)-1);

    localStorage.setItem("post-title", element.getElementsByTagName("h2")[0].innerHTML);
    localStorage.setItem("post-author", element.getElementsByClassName("post-author")[0].innerHTML);
    localStorage.setItem("post-text", element.getElementsByClassName("post-text")[0].innerHTML);
    localStorage.setItem("post-img", element.getElementsByClassName("post-img")[0].src);
    localStorage.setItem("post-likes", element.getElementsByClassName("post-likes")[0].innerHTML);
    localStorage.setItem("post-date", element.getElementsByClassName("post-date")[0].innerHTML);

    localStorage.setItem("post-comments", element.getElementsByClassName("post-comments")[0].innerHTML);
    
    if(window.location.pathname.includes("challenge.html")){
        localStorage.setItem("goBackLocation", "challenge.html");
    }
    else if(window.location.pathname.includes("community.html")){
        localStorage.setItem("goBackLocation", "community.html");
    }
    else{
        localStorage.setItem("goBackLocation", "community-mydrawings.html");
    }
    window.open("community-post.html", "_self");


}

function loadNewPost(number){
    //get Post with number
    let post = JSON.parse(localStorage.getItem("myPosts"))[number];

    //prepare image
    let imgLink = "data:image/png;base64," + post[2];


    //prepare date of today
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    today = dd + '.' + mm + '.' + yyyy;

    let newID = (number + 1) + parseInt(localStorage.getItem("base-post-amount"));

    let postHtml = ""
        +   "<div id='post-" + newID + "' class='community-post' onclick='openPost(this)'>"
            +   "<div class='post-left'>"
                +   "<div class='post-title-author'>"
                    +   "<h2>" + post[0] + "</h2>"
                    +   "<p class='post-author'>Von <b>Ich</b></p>"
                +   "</div>"
                +   "<p class='post-text'>" + post[1] + "</p>"
                +   "<div class='post-stamp-container'>"
                    +   "<div class='post-stamp'>"
                        +   "<img src='../assets/icons/icon-uhr.svg'>"
                        +   "<p class='post-date'>" + today + "</p>"
                    +   "</div>"
                    +   "<div class='post-stamp'>"
                        +   "<img src='../assets/icons/icon-herz.svg'>"
                        +   "<p class='post-likes'>0</p>"
                    +   "</div>"
                    +   "<div class='post-stamp'>"
                        +   "<img src='../assets/icons/icon-comment.svg'>"
                        +   "<p class='post-comments'>0</p>"
                    +   "</div>"
                +   "</div>"
            +   "</div>"
            +   "<div class='post-right'>"
                +   "<img class='post-img' src='" + imgLink + "'>"
            +   "</div>"
        +   "</div>";

    document.getElementsByClassName("community-post-container")[0].innerHTML = postHtml + document.getElementsByClassName("community-post-container")[0].innerHTML;
}

function openNewPost(){

    if(window.location.pathname.includes("community-mydrawings.html")){
        localStorage.setItem("goBackLocation", "community-mydrawings.html");
    }
    else{
        localStorage.setItem("goBackLocation", "community.html");
    }
    window.open("community-newpost.html", "_self");
}

function openMyDrawings(){
    window.open("community-mydrawings.html", "_self");
}