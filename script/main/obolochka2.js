function glagolvoice(idel){
  var _el = document.getElementById(idel)
    if (orderVoice)
    {
      textgen(idel);
      opacityFun(_el);
    } {}
}


var orderVoice = true;
var op = 0;

function opacityFun(_el){
  //var el = _el;
  orderVoice = false;
  function tyrPlus(){
    if (_el.style.opacity <= 1) {
      op += 0.02;
      _el.style.opacity = op;
      setTimeout(tyrPlus, 60);
    } else{
      tyrMinus();
    }
  }
      function tyrMinus(){
    if (_el.style.opacity > 0 ) {
      op += -0.02;    
      _el.style.opacity = op;
      setTimeout(tyrMinus, 60);
      orderVoice = false;
    } else{
      _el.style.opacity = 0;
      orderVoice = true;
    }
  }
  tyrPlus()
}

function textgen(idel){
    var tempStr;
    var arrayLength1 = data_scroll_voice[0].length-1;
    var arrayLength2 = data_scroll_voice[1].length-1;

    tempStr = data_scroll_voice[0][Math.round(Math.random()*arrayLength1)];
    tempStr += data_scroll_voice[1][Math.round(Math.random()*arrayLength2)] + '...';

    document.getElementById(idel).innerHTML = tempStr;
}
