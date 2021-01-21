function glagolvoice(idel){
  var el = document.getElementById(idel);
      if (el.style.opacity == 0){
        text_scroll(el);
        opacity0Fun(idel);
    }
}

function text_scroll(el){
    var tempStr;
    var arrayLength1 = data_scroll_voice[0].length-1;
    var arrayLength2 = data_scroll_voice[1].length-1;
    tempStr = data_scroll_voice[0][Math.round(Math.random()*arrayLength1)];
    tempStr += data_scroll_voice[1][Math.round(Math.random()*arrayLength2)] + '...';
    el.innerHTML = tempStr;
}

function fire(){
  var i = 0;
  var ii = 0;
  var elar = document.getElementById('continer').children;
  step1(elar);
	function step1(el){
    if (i < el.length) {
      el[i].classList.add('firestep1');
			i++;
      setTimeout(step1, 1400, el);
    }
    else {
      if (ii < el.length){
        ii++;
        el[i-ii].classList.add('firestep2');
        setTimeout(step1, 1500, el);
      }
    }
  }
}

