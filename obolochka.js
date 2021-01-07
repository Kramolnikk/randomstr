//var button_main_menu = document.getElementById('continer_scene').getElementsByTagName('div');

function ConstructorScene(){
    button_display_screen(document.getElementById('main_menu').getElementsByTagName('div')[0], 0);
}

function button_display_screen(a, b){
//a.marginLeft = a.marginLeft - 20;
    for (var i = 0; i<document.getElementById('continer_scene').getElementsByTagName('div').length; i++){
        document.getElementById('continer_scene').getElementsByTagName('div')[i].style.display = 'none';
    }
    document.getElementById('continer_scene').getElementsByTagName('div')[b].style.display = 'block';
    obvodka_button(a);
}

function obvodka_button(a){
    for (var i = 0; i<document.getElementById('main_menu').getElementsByTagName('div').length; i++){
        document.getElementById('main_menu').getElementsByTagName('div')[i].style.borderStyle = 'none';
    }
    a.style.borderStyle = 'solid';
    a.style.border.borderColor = 'black';

}