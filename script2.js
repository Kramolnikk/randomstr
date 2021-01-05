function Constructor(){
	for (var i = 0; i < data.length; i++){
            var ListElement = document.getElementById("ListTem");
            ListElement.options[i] = new Option(data[i][0], i);   
	}
}
// тестовая запись для проверки разницы версий 
// порно порно весело задорно! 
 
function DisplayMassiveContent(){
    var DisplayArray = [];
    for (var i = 0; i < data[document.getElementById("ListTem").value].length; i++){
        DisplayArray[i] = data[document.getElementById("ListTem").value][i] + '<br><br>';
    }
    document.getElementById("MassiveContent").innerHTML = DisplayArray;
}

function AlgoritmVariativeRandom(){
    var data_spisok = [0, 4, 2];
    var random_variant = Math.round(Math.random()*(data_spisok.length-1));
    
    data_spisok[Math.round(Math.random()*(data_spisok.length-1))];
    var konechnoe_govno = data_spisok[Math.round(Math.random()*(data_spisok.length-1))];
    var tempStr = '';
    var arrayLength;
    let listTemVal = document.getElementById("ListTem").value;

    for (var i = 1; i <= data[konechnoe_govno].length-1; i++){
        arrayLength = data[konechnoe_govno][i].length-1;
        var randomElement = Math.round(Math.random()*arrayLength);
        tempStr = tempStr + ' ' + data[konechnoe_govno][i][randomElement];
    }
    document.getElementById('result').innerHTML = tempStr;
}

function Algoritm1(){
    var tempStr = '';
    var arrayLength;
    let listTemVal = document.getElementById("ListTem").value;

    for (var i = 1; i <= data[listTemVal].length-1; i++){
        arrayLength = data[listTemVal][i].length-1;
        var randomElement = Math.round(Math.random()*arrayLength);
        tempStr = tempStr +/* ', ' +*/ ' ' + data[listTemVal][i][randomElement];
    }
    document.getElementById('result').innerHTML = tempStr;
}
/*
function Algoritm2(){
    var arrayLength = data[listTemVal][1].length-1;
    var randomElement = Math.round(Math.random()*arrayLength);
    var tempStr = tempStr + data[listTemVal][1][randomElement];

    arrayLength = data[listTemVal][2].length-1;
    tempStr = tempStr  + ' ' + data[listTemVal][2][randomElement];
    
    arrayLength = data[listTemVal][3].length-1;
    tempStr = tempStr  + ' ' + data[listTemVal][3][randomElement];
}
*/
function AlgoritmFullRandom(){
    var tempStr = '';
    var arrayLength;
    var targetArray;
    targetArray = randomArray();
    for (var i = 1; i <= targetArray.length-1; i++){
        arrayLength = targetArray[i].length-1;
        var randomElement = Math.round(Math.random()*arrayLength);
        tempStr = tempStr + ' ' + targetArray[i][randomElement];
    }
    document.getElementById('result').innerHTML = tempStr;
}

function randomArray(){
    var random_array_list = [];
    for (var i = 0; i <= 4; i++){
            random_array_list[i] = data[i];
    }
    return (random_array_list[Math.round(Math.random()*(random_array_list.length-1))]);
}