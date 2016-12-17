function load() {

  if(window.XMLHttpRequest) {
    fichero = new XMLHttpRequest();
  }
  else if (window.ActiveXObject) {
    fichero = new ActiveXObject('Microsoft.XMLHttpRequest');
  }
  fichero.onreadystatechange = show;

  fichero.open('GET', 'http://localhost/cargar/helloworld.txt', true);
  fichero.send(null);
}

function show() {

  if(fichero.readyState == 4){
    if(fichero.status == 200){
      document.getElementById('carga').innerHTML = fichero.responseText;
    }
  }
}
