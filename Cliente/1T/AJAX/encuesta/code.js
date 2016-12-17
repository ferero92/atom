var ajax;

function vote() {

  var lan = document.getElementsByName('lan');
  var vote;

  for (var i = 0; i < lan.length; i++) {
    if(lan[i].checked)
      vote = lan[i].value;
  }
  load('http://localhost/encuesta/vote.php?vote=' + vote);
}

function load(url) {

  if(window.XMLHttpRequest) {
    ajax = new XMLHttpRequest();
  }
  else if (window.ActiveXObject) {
    ajax = new ActiveXObject('Microsoft.XMLHttpRequest');
  }
  ajax.onreadystatechange = function () {

    if(ajax.readyState == 4){
      if(ajax.status == 200)
        stadist();
    }
  };
  ajax.open('GET', url, true);
  ajax.send(null);
}

function stadist() {

  alert('ok');
  alert(ajax.responseText);
}
