function emptyDetect(el){
    if (el.value == ""){
        el.classList.add("redfon")
    }
    else{
        el.classList.remove("redfon")
    }
}