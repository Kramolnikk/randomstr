"use strict";

var kart_continer, subArrayLine;
var newOption, dialogFullArray = [];
var dialogSelectCheck;//переменная что бы запомнить какой массив переименовываем
var selectedArray;//храним выбранный селектом массив
var selectKartI = "";//запоминаем номер карточки
var dialogSelectA;
var kartTMP;


function postLoadColor(){//красим пустые поля
    emptyDetect(dialog_edit_ar_name);
    emptyDetect(dialog_edit_subar_name);
    emptyDetect(testTextarea);
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


function postLoad2(){
    kart_continer = document.getElementById("prev_ar_body");
    subArrayLine = document.createElement("div");
    subArrayLine.classList.add("subArrayLine");

    window.dialogNameArray = document.getElementById("dialog_edit_ar_name");
    window.dialog_edit_ar_meta = document.getElementById("dialog_edit_ar_meta");
    window.dialogSelect = document.getElementById("dialog_select_ar_name");

    window.dialogMap = document.getElementById("dialog_edit_subar_map");
    window.dialogSubName = document.getElementById("dialog_edit_subar_name");
    window.dialogSubMeta = document.getElementById("dialog_edit_subar_meta");
    window.dialogTextarea = document.getElementById("testTextarea");
    window.dialogSelectA = dialogSelect.selectedIndex;
    refreshSelected();//обновляем указатель на массив
    //dialogSelect.onchange = (refreshSelected, newEra);
    dialogSelect.onchange = refreshSelected;
}


function dialogCleaned(){
    dialogSubName.value = "";
    dialogSubMeta.value = "";
    dialogMap.value = "";
    dialogTextarea.value = "";
    postLoadColor();//красим пустые поля
}


function refreshSelected(){//коротко говорим какой массив сейчас выбран
    dialogSelectA = dialogSelect.selectedIndex;
    selectedArray = dialogFullArray[dialogSelectA];
    newEra();
}


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
//    dialogNameArray.value = "";
//    dialog_edit_ar_meta.value = "";
//======================
    refreshSelected();
    postLoadColor();//красим пустые поля
}


function knopka2(){//"добавить в массив"
    var array = [];
    if (!dialogSelect.value) return(alert("Не создан ни один массив!"))
    if (!dialogSubName.value) return(alert("Введите имя подмассива."));
    if (!dialogTextarea.value) return(alert("Введите данные."));
    array = standartParseDialog();//парсим стандартным .split()
    dialogFullArray[dialogSelectA][2].push(array.slice());//обработанные данные в массив
    createClearKart();//создаём карту и вставляем в список
    arrayViuwer(array);//отдаём массив для визуализации на карточке
    dialogCleaned();
}


function standartParseDialog(){//парсим стандартным .split()
    var array = [];
    array[0] = [dialogSubName.value];
    array[0][1] = "комент";
    array[1] = (dialogSubMeta.value) ? dialogSubMeta.value.split('\u005C') : [];
    array[2] = (dialogMap.value) ? dialogMap.value.split('\u005C') : [];
    array[3] = simpleParse(dialogTextarea);
    return array
}


function createClearKart(){
    kartTMP = document.getElementById("secretKartochka").cloneNode(true);
    kartTMP.removeAttribute("id");
    if (selectKartI !== ""){
        kart_continer.replaceChild(kartTMP, kart_continer.childNodes[selectKartI]);//подмена редактируемой карты на пустую
    } else{
        kart_continer.append(kartTMP);//Вставляем в конец чистую карточку
    }
    return kartTMP;
}


function arrayViuwer(array){//заполняем карточку
    var spanTMP;
    spanTMP = document.createElement("span");
    spanTMP.classList.add("dialog_data");
    //spanTMP - это <span class="dialog_data"></span>
    //kartTMP - это <div class="prev_kartochka"></div>
    kartTMP.querySelector(".label_name_count").innerHTML = "(" + (array[0].length + array[1].length) + ")";//число в имени
    kartTMP.querySelector(".label_kartochka_2").innerHTML = array[0].join(", ") + " | " + array[1].join(", ");//имя карточки
    kartTMP.querySelector(".dialog_data_count").innerHTML = "(" + array[3].length + ")";//число данных
    for (var i=0; i <= array[3].length-1; i++){//заполняем из поля "текстареа"
        spanTMP.innerHTML = array[3][i] + "<br>";//заполняем виртуальный спан строкой-массивом из textarea
        kartTMP.querySelector(".prev_kartochka_data").append(spanTMP.cloneNode(true));//вставляем в карточку span с инфой
        kartTMP.querySelector(".prev_kartochka_data").append(subArrayLine.cloneNode(false));//разделяем span'ы линией
    }
}


function knopka5(){//кнопка "Применить изменения" (в карточке)
    var array = [];
    array = standartParseDialog();
    createClearKart();//создаём карту и вставляем в список
    arrayViuwer(array);
    dialogFullArray[dialogSelectA][2][selectKartI] = array.slice();//обработанные данные в массив
    selectKartI = "";
    dialog_bt_subar_add.style.display = "block";//возвращаем кнопку "Добавить в массив"
    dialogCleaned();
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


function simpleReParse(array, targetTextarea){//распаковываем массив в ... (Textarea)
    var TMP = [];
    for (var i=0; i < array.length; i++){
        TMP[i] = array[i].join('\u005C');
    }
    targetTextarea.value = TMP.join("\n");
}


function dialogRenameSelect(){
    if (!dialogSelect.value) return alert("Не выбран ни один массив!");
    dialogNameArray.value = dialogSelect.value;
    dialog_edit_ar_meta.value = dialogFullArray[dialogSelectA][1].join(", ");
    dialogSelectCheck = dialogSelectA;//запоминаем какой массив переименовываем
    dialog_bt_ar_name.style.display = "none";//прячем кнопку "Создать массив"
    dialogSelect.disabled = true;
}


function dialogSelectComplite(){//кнопка "применить изменения" (Глав. массив)
    dialogFullArray[dialogSelectCheck][0][0] = dialogNameArray.value;//пишем в массив изменённое имя
    dialogSelect.childNodes[dialogSelectCheck].text = dialogFullArray[dialogSelectCheck][0];//меняем надпись выбранного элемента
    dialogFullArray[dialogSelectCheck][1] = dialog_edit_ar_meta.value.split(", ");//пишем в массив изменённые метаданные
    dialog_bt_ar_name.style.display = "block";//возвращаем кнопку "Создать массив"
    dialogSelect.disabled = false;
    //========== чистим форму ввода ==========
    dialogNameArray.value = "";
    dialog_edit_ar_meta.value = "";
    //======================
    postLoadColor();
}


function knopka4(el){//изменение карточки
    var array;
    //========== получаем целевой массив (ссылку) ==========
    el = el.parentNode.parentNode;//получаем узел карточки
    for (var i=0; i < kart_continer.childNodes.length; i++){//ищем порядковый номер карточки
        if (kart_continer.childNodes[i] == el) {//сравниваем родительскую карточку с нашей
            array = selectedArray[2][i];//выделяем в array целевой массив
            selectKartI = i;//запоминаем номер карточки
            break//прерываем поиск в родителе раз уже нашли
        };
    }
    //======================
    //========== тащим в форму для изменения ==========
    dialogSubName.value = array[0][0];//имя
    dialogSubMeta.value = array[1].join(", ");//мета
    dialogMap.value = array[2].join(", ");//карта
    simpleReParse(array[3], dialogTextarea);//текстареа
    //======================
    dialog_bt_subar_add.style.display = "none";//прячем кнопку "Добавить в массив"
    postLoadColor();
}


function newEra(){
    var elTMP, elTMP2;
    var i = 0;
    //этот метод создаёт новый объект и убивает работу, нужно переопределять
    // if (elTMP2){
        // kart_continer.removeAttribute("id");
        //  elTMP = kart_continer.cloneNode(false);
        //  elTMP2 = kart_continer.parentNode;
        //  elTMP2.replaceChild(elTMP, kart_continer);//подмена редактируемой карты на пустую
        //  kart_continer.setAttribute('id', 'prev_ar_body');
    // }else{console.log("нечего очищать")}

    //убираем все карточки
    while(kart_continer.childNodes[0]){
        kart_continer.childNodes[0].remove();
    }

    //отрисовываем новые карточки
    //for (var i=0; dialogFullArray[dialogSelectA][i].length<i; i++){
    if (!dialogFullArray[dialogSelectA]) return;
    while(dialogFullArray[dialogSelectA][2][i]){
        createClearKart();//создаём карту и вставляем в список
        arrayViuwer(dialogFullArray[dialogSelectA][2][i]);//отдаём массив для визуализации на карточке
        i++;
    }
}