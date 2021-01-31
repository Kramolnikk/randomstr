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


var newKartochka;
var kart_continer;
var childrenTMP;
var spanTMP;
var subArrayLine;
var dialogNameArray;
var dialog_edit_ar_meta;
var dialogSelect;
var newOption;

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
    dialog_edit_ar_meta = document.getElementById('dialog_edit_ar_meta');
    dialogSelect = document.getElementById('dialog_select_ar_name');
}

function createNewKart(){
    newKartochka = document.getElementById('secretKartochka').cloneNode(true);
    newKartochka.removeAttribute("id");
    kart_continer.append(newKartochka);//Вставляем чистую карточку
    childrenTMP = kart_continer.lastChild;}

function knopka1(){}

var dialogFullArray = [];

function knopka3(){//кнопка "Создать новый массив"
    if (dialogNameArray.value){
        newOption = document.createElement('option');
        newOption.text = dialogNameArray.value;
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
    var superPuperArray = [];
    var dialogMap = document.getElementById('dialog_edit_subar_map');
    var dialogSubName = document.getElementById('dialog_edit_subar_name');
    var dialogSubMeta = document.getElementById('dialog_edit_subar_meta');
    var dialogTextarea = document.getElementById('testTextarea');
    if (!dialogSelect.value) {
        alert('Не создан ни один массив!'); return
    }
    //========== тут парсим стандартным .split() ==========
    if (dialogSubName.value == ''){
        alert('Введите имя подмассива.'); return
    }
    if (dialogTextarea.value == ''){
        alert('Введите данные.'); return
    }
    superPuperArray[0] = [dialogSubName.value];
    superPuperArray[0][1] = 'комент';
    superPuperArray[1] = (dialogSubMeta.value) ? dialogSubMeta.value.split('\u005C') : [];
    superPuperArray[2] = (dialogMap.value) ? dialogMap.value.split('\u005C') : [];
    superPuperArray[3] = simpleParse(dialogTextarea);
    //======================
    //========== чистим форму ввода ==========
    dialogSubName.value = '';
    dialogSubMeta.value = '';
    dialogMap.value = '';
    dialogTextarea.value = '';
    //======================
    postLoad1();//красим пустые поля
    createNewKart();//создаём "карточку"
//========== далее распихиваем по "карточке" ==========
    childrenTMP.querySelector('.label_kartochka_1').innerHTML = "(" + (superPuperArray[0].length + superPuperArray[1].length) + ")";//число в имени
    childrenTMP.querySelector('.label_kartochka_2').innerHTML = superPuperArray[0].join(", ") +'\u005C ' + superPuperArray[1].join(", ");//имя карточки
    childrenTMP.querySelector('.dialog_data_count').innerHTML = "(" + superPuperArray[3].length + ")";//число данных
    for (var i=0; i<= superPuperArray[3].length-1; i++){//заполняем из поля "текстареа"
        //childrenTMP - это <div class="prev_kartochka"></div>
        //spanTMP - это <span class="dialog_data"></span>
        spanTMP.innerHTML = superPuperArray[3][i] + "<br>";//заполняем виртуальный спам строкой-массивом из textarea
        childrenTMP.querySelector('.prev_kartochka_data').append(spanTMP.cloneNode(true));//вставляем в карточку span с инфой
        childrenTMP.querySelector('.prev_kartochka_data').append(subArrayLine.cloneNode(false));//разделяем span'ы линией
    }
    //======================
    //========== добавляем данные в главный массив диалогов ==========
    dialogFullArray[dialogSelect.selectedIndex][2].push(superPuperArray.slice());
    //======================
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

var dialogRenameSelectCheck;//переменная что бы запомнить какой массив редактируем

function dialogRenameSelect(){
    if (!dialogSelect.value) {
        alert('Не выбран ни один массив!');
        return}
    dialogNameArray.value = dialogSelect.value;
    dialog_edit_ar_meta.value = dialogFullArray[dialogSelect.selectedIndex][1].join(", ");
    dialogRenameSelectCheck = dialogSelect.selectedIndex;//запоминаем какой массив редактируем
    dialog_bt_ar_name.style.display = "none";//прячем кнопку "Создать массив"
    dialogSelect.disabled = true;
}

function dialogRenameSelectComplite(){//кнопка "применить изменения"
    dialogFullArray[dialogRenameSelectCheck][0][0] = dialogNameArray.value;//пишем в массив изменённое имя
    dialogSelect.childNodes[dialogRenameSelectCheck+1].text = dialogFullArray[dialogRenameSelectCheck][0];//меняем надпись выбранного элемента
    dialogFullArray[dialogRenameSelectCheck][1] = dialog_edit_ar_meta.value.split(", ");//пишем в массив изменённые метаданные
    dialog_bt_ar_name.style.display = "block";//возвращаем кнопку "Создать массив"
    dialogSelect.disabled = false;
//========== чистим форму ввода ==========
    dialogNameArray.value = '';
    dialog_edit_ar_meta.value = '';
//======================
    postLoad1();//красим пустые поля
}