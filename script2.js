function Constructor(){
	for (var i = 0; i < data.length; i++){
            var ListElement = document.getElementById("ListTem");
            ListElement.options[i] = new Option(data[i][0], i);   
	}
}

function displayMassiveContent(){
    document.getElementById("MassiveContent").innerHTML = data[document.getElementById("ListTem").value][1] + '<br>';
}

function AlgoritmVariativeRandom(){

}

//--------------------------
function randomArray(){
    var random_array_list = [];
    for (var i = 0; i <= 4; i++){  
            random_array_list[i] = data[i];
    }
    return (random_array_list[Math.round(Math.random()*(random_array_list.length-1))]);
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

function Algoritm2(){
    var arrayLength = data[listTemVal][1].length-1;
    var randomElement = Math.round(Math.random()*arrayLength);
    var tempStr = tempStr + data[listTemVal][1][randomElement];

    arrayLength = data[listTemVal][2].length-1;
    tempStr = tempStr  + ' ' + data[listTemVal][2][randomElement];
    
    arrayLength = data[listTemVal][3].length-1;
    tempStr = tempStr  + ' ' + data[listTemVal][3][randomElement];
}

function Algoritm1Random(){
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