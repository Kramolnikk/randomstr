var orderVoice = true;
var op = 0;

function opacityFun(el, t){
  //var el = el;
  orderVoice = false;
  function funPlus(){
    if (el.style.opacity <= 1) {
      op += 0.02;
      el.style.opacity = op;
      setTimeout(funPlus, t);
    } else{
      funMinus();
    }
  }
      function funMinus(){
    if (el.style.opacity > 0 ) {
      op += -0.02;    
      el.style.opacity = op;
      setTimeout(funMinus, t);
      orderVoice = false;
    } else{
      el.style.opacity = 0;
      orderVoice = true;
    }
  }
  funPlus()
}