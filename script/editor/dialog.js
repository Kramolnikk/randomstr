function emptyDetect(el){
    if (el.value == ""){
        el.classList.add("redfon")
    }
    else{
        el.classList.remove("redfon")
    }
}

function smpleParse(){
    var strtmp = '';
    var array = [];
    var str = document.getElementById('testTextarea').value;
    var schet = 0;
    //str.splice(0, 1);
    for (var i=0; i<=str.length; i++){
        if (str[i] == '\u005C' || i == str.length){
            array[schet] = strtmp;
            strtmp='';
            schet++;
        }
        else{
            strtmp += str[i];
        }
    }
    document.getElementById('testSpanData').innerHTML = "(" + array.length + ")";
    document.getElementById('testData').innerHTML = array;
}