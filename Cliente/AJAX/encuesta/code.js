function load() {

  if(window.XMLHttpRequest) {
    ajax = new XMLHttpRequest();
  }
  else if (window.ActiveXObject) {
    ajax = new ActiveXObject('Microsoft.XMLHttpRequest');
  }

  var lan = document.getElementsByName('lan');
  var vote;

  for (var i = 0; i < lan.length; i++) {
    if(lan[i].checked)
      vote = lan[i].value;
  }

  ajax.onreadystatechange = function (){
    document.getElementsByTagName('fieldset')[0].innerHTML = '<img src="load.gif" style="width: 30px; height: 30px;"/>';
    if(ajax.readyState == 4){
      if(ajax.status == 200){
        stadist();
      }
    }
  };

  ajax.open('GET', 'http://localhost/encuesta/voto.php?vote='+vote, true);
  ajax.send(null);
}

function stadist() {

  var 
}
