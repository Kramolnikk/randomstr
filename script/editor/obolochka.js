"use strict"
var wrap_menu;
var menul_editor_button;
var scene;
var selected_button;
var filerace;

function ConstructorScene()
{
    wrap_menu = document.getElementById('wrap_menu');
    menul_editor_button = document.getElementById('editor_menu').getElementsByTagName('div');
    scene = document.getElementsByClassName('scene');
    button_display_screen(menul_editor_button[12], 12);
    filerace = document.getElementById("race_upload_json").files;
    document.getElementById("selected").innerHTML = (filerace[0]) ? filerace[0].name : 'Файл не выбран';
    emptyDetect(dialog_edit_ar_name);
    emptyDetect(dialog_edit_subar_name);
    emptyDetect(testTextarea);
}

function button_display_screen(target, b)
{
    var shift_top = -2, shift_left = 3;
    if (target != selected_button)
    {
        /**********проявление нужной сцены***********/
        for (var i = 0; i<scene.length; i++)
        {
            scene[i].style.display = 'none';
        }
        scene[b].style.display = 'block';
        /*******************************************/

        /***********КРАСИМ АКТИВНУЮ КНОПКУ**********/
        target.classList.add('activity_button_menul');
        if (selected_button) {selected_button.classList.remove('activity_button_menul');     selected_button.style.zIndex = '0';}
        /*******************************************/

        /**********ВСПЛЫТИЕ АКТИВНОЙ КНОПКИ*********//*
        let style = window.getComputedStyle;
        let top = style(target).top, left=style(target).left;
        top = parseInt(top);
        left = parseInt(left);
        target.style.top = top + shift_top + 'px';// вверх
        target.style.left = left + shift_left + 'px';
        target.style.zIndex = '1';
        if (selected_button)// вниз
        {
            top = style(selected_button).top;
            top = parseInt(top);
            left = style(selected_button).left;
            left = parseInt(left);
            //selected_button.style.top= top - shift_top + 'px';
            //selected_button.style.left= left - shift_left + 'px';
        }
        else
        {
            selected_button = target;
        }*/ 
        /*******************************************/
        selected_button = target;
    }
    else{}
}

function red_click(){
}

function red_click_exit(){

}

var abc;
function showFile(input)
{
    let file = input.files[0];
    //  alert(`File name: ${file.name}`); // например, my.png
    //  alert(`Last modified: ${file.lastModified}`); // например, 1552830408824
    function show_getfile(f0) {
        document.getElementById("selected").innerHTML = f0.name;
    }
    show_getfile(file);
}

var x;
var xarray = [];
function megafullulta()
{
//    var myobj = '{ "cars":[ "Ford", "BMW", "Fiat" ]}';
//    var resultparse = JSON.parse(myobj);
    x = JSON.parse('{ "chelovek":[ "Голова", "Тело", "Руки", "Ноги", "Жопа", "Спина", "Живот" ]}');
//    alert(x.chelovek[0]);
    xarray = x.chelovek[0];
//    console.log(x.chelovek[0]);
//var y = JSON.parse(abc);
    for (var i=0; i<2; i++){
    }
}
