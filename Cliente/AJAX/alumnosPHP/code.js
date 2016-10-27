function load() {

  if(window.XMLHttpRequest) {
    fichero = new XMLHttpRequest();
  }
  else if (window.ActiveXObject) {
    fichero = new ActiveXObject('Microsoft.XMLHttpRequest');
  }

  var order = document.getElementById('order').value;
  
  fichero.onreadystatechange = show;

  fichero.open('GET', 'http://localhost/alumnosPHP/alumnos.php?order='+order, true);
  fichero.send(null);
}

function show() {

  if(fichero.readyState == 4){
    if(fichero.status == 200){
      table();
    }
  }
}

function table(){

  var alumnos = fichero.responseText;
  var table = document.getElementById('table');

  table.innerHTML = alumnos;
}
