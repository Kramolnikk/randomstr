function AlgoritmVariativeRandom2(){
    var data_spisok = [0, 4, 2];
    var data_spisok2 = [7];
    var random_variant = Math.round(Math.random()*(data_spisok.length-1));
    //я тут немного наговнокодил 
    data_spisok[Math.round(Math.random()*(data_spisok.length-1))];
    var konechnoe_ = data_spisok[Math.round(Math.random()*(data_spisok.length-1))];
    //понимаю что можно все это сделать короче и лаконичнее но не зню как
    data_spisok2[Math.round(Math.random()*(data_spisok2.length-1))];
    var konechnoe2 = data_spisok2[Math.round(Math.random()*(data_spisok2.length-1))];
    //поэтому сделал как смог
    var tempStr1 = '';
    var tempStr2 = '';
    var arrayLength;
    let listTemVal = document.getElementById("ListTem").value;

    for (var i = 1; i <= data[konechnoe_].length-1; i++){
        arrayLength = data[konechnoe_][i].length-1;
        var randomElement = Math.round(Math.random()*arrayLength);
        tempStr1 = tempStr1 + ' ' + data[konechnoe_][i][randomElement];
    }

    for (var i = 1; i <= data[konechnoe2].length-1; i++){
        arrayLength = data[konechnoe2][i].length-1;
        var randomElement = Math.round(Math.random()*arrayLength);
        tempStr2 = tempStr2 + ' ' + data[konechnoe2][i][randomElement];
    }
    
    document.getElementById('result').innerHTML = tempStr1;
    document.getElementById('result2').innerHTML = tempStr2;
}
