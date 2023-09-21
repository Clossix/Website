function triggerInput(){
    document.getElementsByClassName("input-img-input")[0].click();
}

function chooseImage(element){
    let file = element.files[0];
    document.getElementById("inputimage").src = URL.createObjectURL(file);
}

function triggerShare(){
    let title = document.getElementById("inputtitle").value;
    let text = document.getElementById("inputtext").value;
    let img = getBase64Image(document.getElementById("inputimage"));

    saveNewPost(title, text, img);

    goBack();
    
}

function goBack(){
    
    window.open(localStorage.getItem("goBackLocation"), "_self");
}

function saveNewPost(title, text, img){

    let myPosts = JSON.parse(localStorage.getItem("myPosts"));
    myPosts.push([]);

    let number = myPosts.length-1;


    myPosts[number][0] = title;
    myPosts[number][1] =  text;
    myPosts[number][2] = img;

    localStorage.setItem("myPosts", JSON.stringify(myPosts));

    //comments
    let comments = JSON.parse(localStorage.getItem("comments"));
    comments.push(["kamir | Mag ich"]);
    localStorage.setItem("comments", JSON.stringify(comments));

    localStorage.setItem("numberOfMyPosts", parseInt(localStorage.getItem("numberOfMyPosts"))+1);

}

function getBase64Image(img) {
    
    let canvas = document.createElement("canvas");
    
    canvas.width = img.width;
    canvas.height = img.height;

    let factor = 1;

    if(canvas.width>=canvas.height){
        if(canvas.width>1000){
            factor = 1000 / canvas.width;
        }
    }
    else {
        if(canvas.height>1000){
            factor = 1000 / canvas.height;
        }
    }

    canvas.width = canvas.width * factor;
    canvas.height = canvas.height * factor;
    

    let ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);



    let dataURL = canvas.toDataURL("image/png");
    

    dataURL = dataURL.replace(/^data:image\/(png|jpg);base64,/, "")


    return dataURL;
}