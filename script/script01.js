function opacity0Fun(idel, t){
  var op = 0;
  var el;
  el = (typeof idel === "string" || idel instanceof String) ? document.getElementById(idel) : idel;
  t = (t == undefined) ? 70 : {};
  if (el.style.opacity == 0){
    function funPlus(){
      if (el.style.opacity <= 1) {
        op += 0.02;
        el.style.opacity = op;
        setTimeout(funPlus, t);
      }
      else
      {
        funMinus();
      }
    }
    function funMinus(){
      if (el.style.opacity > 0 ) {
        op += -0.02;    
        el.style.opacity = op;
        setTimeout(funMinus, t);
      }
      else
      {
        el.style.opacity = 0;
      }
    }
    funPlus();
  }

}

function svich_display_click(_el, a)
{
    var el = document.getElementById(_el);
    if (el.style.display == 'none')
    {
        el.style.display = 'block';
        a.innerHTML = 'Закрыть';
    }
    else
    {
        el.style.display = 'none';
        a.innerHTML = 'Меню';
    }
}