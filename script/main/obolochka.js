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

function magic(){
  var i = 0;
  var elar = [
    document.getElementById('fon'),
    document.getElementById('svitok'),
    document.getElementById('mainmenu')
  ];
  
  function step0(el){
    //el[i].classList.add('firestep2');
    if (i < elar.length-1) {
      setTimeout(step0, 1500, elar[i]);
      i++;
      alert('доходит до условия и заходит')
    } else
    {}
}

  function step1(el){
    el[0].classList.add('firestep2');
  }


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
      setTimeout(step1, 1300, el);
    } else
    {i--; step2(el);}
  }
  	function step2(el){
    if (i >= 0) {
      el[i].classList.add('firestep2');
			i--;
      setTimeout(step2, 1300, el);
    } else {setTimeout(function() {
      
      el[0].style.display = 'none';
      el[1].style.display = 'none';
      el[2].style.display = 'none';
    }, 600, el);
    }
  }
}

