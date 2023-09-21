function openEntry(entry){
    if(entry.getElementsByClassName("entry-text")[0].style.display == "block"){
        entry.getElementsByClassName("entry-text")[0].style.display = "none";
        entry.getElementsByClassName("entry-text-placeholder")[0].style.display = "block";
    }
    else{
        entry.getElementsByClassName("entry-text")[0].style.display = "block";
        entry.getElementsByClassName("entry-text-placeholder")[0].style.display = "none";
    }
}