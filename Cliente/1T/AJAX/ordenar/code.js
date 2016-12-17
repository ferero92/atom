function load() {

  if(window.XMLHttpRequest) {
    ajax = new XMLHttpRequest();
  }
  else if (window.ActiveXObject) {
    ajax = new ActiveXObject('Microsoft.XMLHttpRequest');
  }
  ajax.onreadystatechange = function () {
    if(ajax.readyState == 4){
      if(ajax.status == 200){
        document.getElementById('tbody').innerHTML = ajax.responseText;
      }
    }
  };
  ajax.open('GET', 'http://localhost/ordenar/ordena.php?order=id&desc=0', true);
  ajax.send(null);
}

function ordena(span) {

  if(window.XMLHttpRequest) {
    ajax = new XMLHttpRequest();
  }
  else if (window.ActiveXObject) {
    ajax = new ActiveXObject('Microsoft.XMLHttpRequest');
  }

  var order = span.parentNode.innerHTML.split('<')[0];
  var desc = 0;

  if(span.className.length == 32)
    desc = 1;

  ajax.onreadystatechange = function () {
    if(ajax.readyState == 4){
      if(ajax.status == 200){
        document.getElementById('tbody').innerHTML = ajax.responseText;
      }
    }
  };
  ajax.open('GET', 'http://localhost/ordenar/ordena.php?order='+order+'&desc='+desc, true);
  ajax.send(null);
}
