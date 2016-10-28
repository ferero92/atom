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

function carga() {

  if(window.XMLHttpRequest) {
    ajax = new XMLHttpRequest();
  }
  else if (window.ActiveXObject) {
    ajax = new ActiveXObject('Microsoft.XMLHttpRequest');
  }

  var name = document.getElementsByName('name')[0].value;
  var direccion = document.getElementsByName('direccion')[0].value;
  var provincia = document.getElementsByName('provincia')[0].value;
  var poblacion = document.getElementsByName('poblacion')[0].value;
  var telefono = document.getElementsByName('telefono')[0].value;

  var parametros = "name="+name+"&direccion="+direccion+"&provincia="+provincia+"&poblacion="+poblacion+"&telefono="+telefono;

  ajax.open('POST', 'http://localhost/alumnosPHP/insertar.php', true);

  ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");

  ajax.send(parametros);
}

function borrar(id) {

  if(window.XMLHttpRequest) {
    borra = new XMLHttpRequest();
  }
  else if (window.ActiveXObject) {
    borra = new ActiveXObject('Microsoft.XMLHttpRequest');
  }

  borra.open('GET', 'http://localhost/alumnosPHP/borrar.php?borra='+id, true);
  borra.send(null);

  load();

  alert(id);
}
