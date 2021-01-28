function emptyDetect(el_){
    var el;
    (typeof el_ === "string" || el_ instanceof String) ? el = document.getElementById(el_) : el = el_;
    if (el.value == ""){
        el.classList.add("redfon")
    }
    else{
        el.classList.remove("redfon")
    }
}

function smpleParse(el_){
    var el;
    (typeof el_ === "string" || el_ instanceof String) ? el = document.getElementById(el_) : el = el_;
    var strtmp = '';
    var arrayMain = [];
    var array = [];
    var str = document.getElementById('testTextarea').value;
    var x = 0, y = 0;
    for (var i=0; i<= str.length; i++){
        if (str[i] == '\u005C' || i == str.length || str[i] == '\n'){
            array[x] = strtmp;
            strtmp='';
            x++;
            if (str[i] == '\n' || i == str.length) {
                x=0;
                arrayMain[y] = array;
                y++;
                array = [];
            }
        }
        else{
            strtmp += str[i];
        }
    }
    document.getElementById('testSpanData').innerHTML = '';
    document.getElementById('testSpanData').innerHTML = "(" + arrayMain.length + ")";
    document.getElementById('testData').innerHTML = '';
    for (var i=0; i<= arrayMain.length-1; i++){
        document.getElementById('testData').innerHTML += arrayMain[i] + "<br>";
    }
}
/*

ar =  [
    [0..9];
    [0..9];
    [0..9];
]
    var array = [[],[]];
        if (str[i] == '\n') {
            y++;
            x=0;
            array[y][x] = strtmp;
            strtmp='';
            x++;
        }
*/