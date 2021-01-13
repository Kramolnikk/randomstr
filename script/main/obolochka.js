function glagolvoice(idel){
  var el = document.getElementById(idel);
  var t = 70;
    if (orderVoice)
    {
      textgen(idel);
      opacityFun(el, t);
    } {}
}

function textgen(idel){
    var tempStr;
    var arrayLength1 = data_scroll_voice[0].length-1;
    var arrayLength2 = data_scroll_voice[1].length-1;

    tempStr = data_scroll_voice[0][Math.round(Math.random()*arrayLength1)];
    tempStr += data_scroll_voice[1][Math.round(Math.random()*arrayLength2)] + '...';

    document.getElementById(idel).innerHTML = tempStr;
}
