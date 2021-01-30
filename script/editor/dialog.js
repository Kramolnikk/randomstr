"use strict"

function emptyDetect(el_){
    var el;
    el = (typeof el_ === "string" || el_ instanceof String) ? document.getElementById(el_) : el_;
    if (el.value == ""){
        el.classList.add("redfon")
    }
    else{
        el.classList.remove("redfon")
    }
}

var arrayNames  = [];
var superPuperArray = [[],[]];
var newKartochka;
var kart_continer;
var childrenTMP;
var spanTMP;
var subArrayLine;
var dialogNameArray;
var dialogSelect;
var dialog_edit_ar_meta;

function postLoad1(){
    emptyDetect(dialog_edit_ar_name);
    emptyDetect(dialog_edit_subar_name);
    emptyDetect(testTextarea);
}

function postLoad2(){
    kart_continer = document.getElementById("prev_ar_body");
    subArrayLine = document.createElement('div');
    subArrayLine.classList.add('subArrayLine');
    spanTMP = document.createElement('span');
    spanTMP.classList.add('dialog_data');
    dialogNameArray = document.getElementById('dialog_edit_ar_name');
    dialogSelect = document.getElementById('dialog_select_ar_name');
    dialog_edit_ar_meta = document.getElementById('dialog_edit_ar_meta');
}

function createNewKart(){
    newKartochka = document.getElementById('secretKartochka').cloneNode(true);
    newKartochka.removeAttribute("id");
    kart_continer.append(newKartochka);//Вставляем чистую карточку
    childrenTMP = kart_continer.lastChild;}

function knopka1(){}

var dialogFullArray = [];

function knopka3(){
    var newOption;
    if (dialogNameArray.value){
        newOption = document.createElement('option');
        newOption.innerHTML = dialogNameArray.value;
        dialogSelect.appendChild(newOption);
        dialogSelect.selectedIndex = dialogSelect.length-1;
        dialogFullArray.push([[dialogNameArray.value]]);
        dialogFullArray[dialogFullArray.length-1].push(dialog_edit_ar_meta.value.split(", "));
        dialogFullArray[dialogFullArray.length-1].push([]);
    }
//========== чистим форму ввода ==========
    dialogNameArray.value = '';
    dialog_edit_ar_meta.value = '';
//======================
    postLoad1();//красим пустые поля
}

//создаём справа карточку с данными
function knopka2(){//напихивать сюда все функции с параметрами, а не в HTML
    if (dialogSelect.value){
        //========== тут парсим стандартным .split() ==========
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
        superPuperArray[0][1] = [];
        if (document.getElementById('dialog_edit_subar_meta').value) {
            superPuperArray[0][1] = document.getElementById('dialog_edit_subar_meta').value.split('\u005C');
        }
        superPuperArray[0][2] = document.getElementById('dialog_edit_subar_map').value.split('\u005C');
        superPuperArray[1] = simpleParse('testTextarea');
    //======================
    //========== чистим форму ввода ==========
        document.getElementById('dialog_edit_subar_name').value = '';
        document.getElementById('dialog_edit_subar_meta').value = '';
        document.getElementById('dialog_edit_subar_map').value = '';
        document.getElementById('testTextarea').value = '';
    //======================
        postLoad1();//красим пустые поля
        createNewKart();//создаём "карточку"
    //========== далее распихиваем по "карточке" ==========
        childrenTMP.querySelector('.label_kartochka_1').innerHTML = "(" + (superPuperArray[0][0].length + superPuperArray[0][1].length) + ")";
        childrenTMP.querySelector('.label_kartochka_2').innerHTML = superPuperArray[0][0].join(", ") +'\u005C ' + superPuperArray[0][1].join(", ");
        childrenTMP.querySelector('.dialog_data_count').innerHTML = "(" + superPuperArray[1].length + ")";
        for (var i=0; i<= superPuperArray[1].length-1; i++){
            //childrenTMP - это <div class="prev_kartochka"></div>
            //spanTMP - это <span class="dialog_data"></span>
            spanTMP.innerHTML = superPuperArray[1][i] + "<br>";
            childrenTMP.querySelector('.prev_kartochka_data').append(spanTMP.cloneNode(true));
            childrenTMP.querySelector('.prev_kartochka_data').append(subArrayLine.cloneNode(false));
        }
    //======================
    //========== добавляем данные в главный массив диалогов ==========
        //dialogFullArray[dialogFullArray.length-1].push(dialogNameArray.value);
        dialogFullArray[dialogSelect.selectedIndex][2].push(superPuperArray);
    //======================
    }
}

function simpleParse(el_){//самописный парсер, отличается дополнительной вложенностью при знаке переноса строки
    var el;
    el = (typeof el_ === "string" || el_ instanceof String) ? document.getElementById(el_) : el_;
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
}


function arraymeta(){
    document.getElementById('dialog_edit_subar_name').value
}