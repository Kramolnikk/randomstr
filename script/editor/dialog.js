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

var arrayNames  = [];
var superPuperArray = [[],[]];
var superArray = [];

function knopka1(){
    
}

function knopka2(){//напихивать сюда все функции с параметрами, а не в HTML
//========== тут парсим ==========
    if (document.getElementById('dialog_edit_subar_name').value == ''){
        alert('Введите имя подмассива.')
        return
    }
    if (document.getElementById('testTextarea').value == ''){
        alert('Введите данные.')
        return
    }
    superPuperArray[0][0] = [document.getElementById('dialog_edit_subar_name').value];
    superPuperArray[0][0][1] = 'комент';
    superPuperArray[0][1] = document.getElementById('dialog_edit_subar_meta').value.split('\u005C');
    superPuperArray[0][2] = document.getElementById('dialog_edit_subar_map').value.split('\u005C');
    superPuperArray[1] = simpleParse('testTextarea');
//==========  ==========
//========== далее распихиваем по "карточке" ==========
    document.getElementById('testspan1').innerHTML = "(" + (superPuperArray[0][0].length + superPuperArray[0][1].length) + ")";
    document.getElementById('testspan2').innerHTML = superPuperArray[0][0].join(", ") +', ' + superPuperArray[0][1].join(", ");
    document.getElementById('testspan3').innerHTML = '';
    document.getElementById('testspan3').innerHTML = "(" + superPuperArray[1].length + ")";
    document.getElementById('testspan4').innerHTML = '';
    for (var i=0; i<= superPuperArray[1].length-1; i++){
        document.getElementById('testspan4').innerHTML += superPuperArray[1][i] + "<br>";
    }
}

function simpleParse(el_){
    var el;
    (typeof el_ === "string" || el_ instanceof String) ? el = document.getElementById(el_) : el = el_;
    var strtmp = '';
    var arrayMain = [];
    var array = [];
    var str = el.value;
    var x = 0;
    for (var i=0; i<= str.length; i++){
        if (str[i] == '\u005C' || i == str.length || str[i] == '\n'){
            array[x] = strtmp;
            strtmp='';
            x++;
            if (str[i] == '\n' || i == str.length) {
                x=0;
                arrayMain.push(array.slice());
                array = [];
            }
        }
        else{
            strtmp += str[i];
        }
    }
    return arrayMain.slice();
    //kartaRender(target);

}


function arraymeta(){
    document.getElementById('dialog_edit_subar_name').value
}