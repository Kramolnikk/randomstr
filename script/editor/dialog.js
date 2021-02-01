"use strict";

var kart_continer, subArrayLine, spanTMP, dialogNameArray, dialog_edit_ar_meta, dialogSelect;
var newKartochka, kartTMP;
var newOption, dialogFullArray = [];
var dialogSelectCheck;//переменная что бы запомнить какой массив редактируем

function postLoad1(){
    emptyDetect(dialog_edit_ar_name);
    emptyDetect(dialog_edit_subar_name);
    emptyDetect(testTextarea);
}

function postLoad2(){
    kart_continer = document.getElementById("prev_ar_body");
    subArrayLine = document.createElement("div");
    subArrayLine.classList.add("subArrayLine");
    spanTMP = document.createElement("span");
    spanTMP.classList.add("dialog_data");
    dialogNameArray = document.getElementById("dialog_edit_ar_name");
    dialog_edit_ar_meta = document.getElementById("dialog_edit_ar_meta");
    dialogSelect = document.getElementById("dialog_select_ar_name");
}

function emptyDetect(el_){//если элемент пуст делаем фон красным
    var el;
    el = (typeof el_ === "string" || el_ instanceof String) ? document.getElementById(el_) : el_;
    if (!el.value){
        el.classList.add("redfon");
    }
    else{
        el.classList.remove("redfon");
    }
}

function createNewKart(){
    newKartochka = document.getElementById("secretKartochka").cloneNode(true);
    newKartochka.removeAttribute("id");
    kart_continer.append(newKartochka);//Вставляем чистую карточку
    kartTMP = kart_continer.lastChild;
}

function knopka1(){}

function knopka3(){//кнопка "Создать новый массив"
    if (!dialogNameArray.value) return(alert("Введите имя массива."));
    newOption = document.createElement("option");
    newOption.text = dialogNameArray.value;
    dialogSelect.appendChild(newOption);
    dialogSelect.selectedIndex = dialogSelect.length-1;
    dialogFullArray.push([[dialogNameArray.value]]);
    dialogFullArray[dialogFullArray.length-1].push(dialog_edit_ar_meta.value.split(", "));
    dialogFullArray[dialogFullArray.length-1].push([]);
//========== чистим форму ввода ==========
    dialogNameArray.value = "";
    dialog_edit_ar_meta.value = "";
//======================
    postLoad1();//красим пустые поля
}

function knopka2(){//создаём справа карточку с данными
    var array = [];
    var dialogMap = document.getElementById("dialog_edit_subar_map");
    var dialogSubName = document.getElementById("dialog_edit_subar_name");
    var dialogSubMeta = document.getElementById("dialog_edit_subar_meta");
    var dialogTextarea = document.getElementById("testTextarea");

    if (!dialogSelect.value) return(alert("Не создан ни один массив!"))
//========== тут парсим стандартным .split() ==========
    if (!dialogSubName.value) return(alert("Введите имя подмассива."));
    if (!dialogTextarea.value) return(alert("Введите данные."))
    array[0] = [dialogSubName.value];
    array[0][1] = "комент";
    array[1] = (dialogSubMeta.value) ? dialogSubMeta.value.split('\u005C') : [];
    array[2] = (dialogMap.value) ? dialogMap.value.split('\u005C') : [];
    array[3] = simpleParse(dialogTextarea);
//======================
//========== чистим форму ввода ==========
    dialogSubName.value = "";
    dialogSubMeta.value = "";
    dialogMap.value = "";
    dialogTextarea.value = "";
//======================
    postLoad1();//красим пустые поля
    dialogFullArray[dialogSelect.selectedIndex][2].push(array.slice());//обработанные данные в массив
    arrayViuwer(array.slice());//отдаём массив для визуализации на карточке
}

function arrayViuwer(array){
    //console.log(array);
    createNewKart();//создаём пустую "карточку"
//kartTMP - это <div class="prev_kartochka"></div>
    kartTMP.querySelector(".label_kartochka_1").innerHTML = "(" + (array[0].length + array[1].length) + ")";//число в имени
    kartTMP.querySelector(".label_kartochka_2").innerHTML = array[0].join(", ") + " | " + array[1].join(", ");//имя карточки
    kartTMP.querySelector(".dialog_data_count").innerHTML = "(" + array[3].length + ")";//число данных
//spanTMP - это <span class="dialog_data"></span>
    for (var i=0; i <= array[3].length-1; i++){//заполняем из поля "текстареа"
        spanTMP.innerHTML = array[3][i] + "<br>";//заполняем виртуальный спан строкой-массивом из textarea
        kartTMP.querySelector(".prev_kartochka_data").append(spanTMP.cloneNode(true));//вставляем в карточку span с инфой
        kartTMP.querySelector(".prev_kartochka_data").append(subArrayLine.cloneNode(false));//разделяем span'ы линией
    }
}

//ниже приведён памятник моему нубству, сохранён как представляющий историческую ценность
function simpleParse(el_){//самописный парсер, отличается дополнительной вложенностью при знаке переноса строки
    var el;
    el = (typeof el_ === "string" || el_ instanceof String) ? document.getElementById(el_) : el_;
    var strtmp = "";
    var arrayMain = [];
    var array = [];
    var str = el.value;
    var x = 0;
    for (var i=0; i<= str.length; i++){
        if (str[i] == '\u005C' || i == str.length || str[i] == '\n'){
            array[x] = strtmp;
            strtmp="";
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

function dialogRenameSelect(){
    if (!dialogSelect.value) return alert("Не выбран ни один массив!");
    dialogNameArray.value = dialogSelect.value;
    dialog_edit_ar_meta.value = dialogFullArray[dialogSelect.selectedIndex][1].join(", ");
    dialogSelectCheck = dialogSelect.selectedIndex;//запоминаем какой массив редактируем
    dialog_bt_ar_name.style.display = "none";//прячем кнопку "Создать массив"
    dialogSelect.disabled = true;
}

function dialogSelectComplite(){//кнопка "применить изменения"
    dialogFullArray[dialogSelectCheck][0][0] = dialogNameArray.value;//пишем в массив изменённое имя
    dialogSelect.childNodes[dialogSelectCheck].text = dialogFullArray[dialogSelectCheck][0];//меняем надпись выбранного элемента
    dialogFullArray[dialogSelectCheck][1] = dialog_edit_ar_meta.value.split(", ");//пишем в массив изменённые метаданные
    dialog_bt_ar_name.style.display = "block";//возвращаем кнопку "Создать массив"
    dialogSelect.disabled = false;
//========== чистим форму ввода ==========
    dialogNameArray.value = "";
    dialog_edit_ar_meta.value = "";
//======================
    postLoad1();//красим пустые поля
}