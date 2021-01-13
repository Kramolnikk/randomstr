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

function fire(){
  setTimeout(() => potyshi1('mainmenu'), 1000)

  function potyshi1(el){
    document.getElementById(el).classList.add('firestep2');
    setTimeout(() => potyshi2('fon'), 1500)
  }
  function potyshi2(el){
    document.getElementById(el).classList.add('firestep2');
    setTimeout(() => potyshi3('svitok'), 1500)
  }
  function potyshi3(el){
    document.getElementById(el).classList.add('firestep2');
    setTimeout(() => potyshi4('mainmenu'), 1500)
  }

  function potyshi4(el){
    document.getElementById(el).classList.add('firestep3');
    setTimeout(() => potyshi5('svitok'), 1500)
  }
  function potyshi5(el){
    document.getElementById(el).classList.add('firestep3');
    setTimeout(() => potyshi6('fon'), 1500)
  }
  function potyshi6(el){
    document.getElementById(el).classList.add('firestep3');
    setTimeout(() => destrall(), 1500)
  }

  function destrall(){
    document.getElementById('mainmenu').style.display = 'none';
    document.getElementById('fon').style.display = 'none';
    document.getElementById('svitok').style.display = 'none';
  }
/*
  document.getElementById('mainmenu').classList.add('firestep2');
  document.getElementById('fon').classList.add('firestep2');
  document.getElementById('svitok').classList.add('firestep2');*/
}
