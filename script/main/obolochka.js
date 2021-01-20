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
  var elar = [
    document.getElementById('fon'),
    document.getElementById('svitok'),
    document.getElementById('mainmenu'),
  ];
  step1(elar);
	function step1(el){
    if (i < el.length) {
      el[i].classList.add('firestep1');
			i++;
      setTimeout(step1, 1400, el);
    } else
    {i--; step2(el);}
  }
  	function step2(el){
    if (i >= 0) {
      el[i].classList.add('firestep2');
			i--;
      setTimeout(step2, 1500, el);
    } else {setTimeout(function() {
      
      el[0].style.display = 'none';
      el[1].style.display = 'none';
      el[2].style.display = 'none';
    }, 1000, el);
    }
  }
}

