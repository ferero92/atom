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
  var provincia = document.getElementsByName('provincia')[0].options[document.getElementsByName('provincia')[0].selectedIndex].innerHTML;
  var poblacion = document.getElementsByName('poblacion')[0].options[document.getElementsByName('poblacion')[0].selectedIndex].innerHTML;
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

  borra.onreadystatechange = cargaBorrar;

  borra.open('GET', 'http://localhost/alumnosPHP/borrar.php?borra='+id, true);
  borra.send(null);
}

function cargaBorrar() {
  if(borra.readyState == 4){
    if(borra.status == 200){
      load();
    }
  }
}

function mostrar(id) {

  if(window.XMLHttpRequest) {
    mostrar = new XMLHttpRequest();
  }
  else if (window.ActiveXObject) {
    mostrar = new ActiveXObject('Microsoft.XMLHttpRequest');
  }

  mostrar.onreadystatechange = cargaMostrar;

  mostrar.open('GET', 'http://localhost/alumnosPHP/mostrar.php?mostrar='+id, true);
  mostrar.send(null);
}

function cargaMostrar() {
  if(mostrar.readyState == 4){
    if(mostrar.status == 200){
      var string = mostrar.responseText.split('+');
      var input = document.getElementsByTagName('input');

      for (var i = 1; i < string.length; i++) {
        input[i-1].value = string[i];
      }
      document.getElementsByTagName('form')[0].setAttribute('onsubmit', 'modificar()');
    }
  }
}

function modificar() {

  if(window.XMLHttpRequest) {
    change = new XMLHttpRequest();
  }
  else if (window.ActiveXObject) {
    change = new ActiveXObject('Microsoft.XMLHttpRequest');
  }

  var name = document.getElementsByName('name')[0].value;
  var direccion = document.getElementsByName('direccion')[0].value;
  var provincia = document.getElementsByName('provincia')[0].options[document.getElementsByName('provincia')[0].selectedIndex].innerHTML;
  var poblacion = document.getElementsByName('poblacion')[0].options[document.getElementsByName('poblacion')[0].selectedIndex].innerHTML;
  var telefono = document.getElementsByName('telefono')[0].value;

  var parametros = "id="+mostrar.responseText.split('+')[0]+"&name="+name+"&direccion="+direccion+"&provincia="+provincia+"&poblacion="+poblacion+"&telefono="+telefono;

  change.onreadystatechange = cargaModificar;

  change.open('POST', 'http://localhost/alumnosPHP/modificar.php', true);
  alert(parametros);

  change.setRequestHeader("Content-Type","application/x-www-form-urlencoded");

  change.send(parametros);
}

function cargaModificar() {
  if(change.readyState == 4){
    if(change.status == 200){
      load();
      alert('cargando');
    }
  }
}

function cargaPueblos() {

  if(window.XMLHttpRequest) {
    pueblos = new XMLHttpRequest();
  }
  else if (window.ActiveXObject) {
    pueblos = new ActiveXObject('Microsoft.XMLHttpRequest');
  }

  var id = document.getElementsByName('provincia')[0].value;

  pueblos.onreadystatechange = cargalospueblos;

  pueblos.open('GET', 'http://localhost/alumnosPHP/pueblos.php?id='+id, true)
  pueblos.send(null);
}

function cargalospueblos() {
  if(pueblos.readyState == 4){
    if(pueblos.status == 200){
      rellenapueblos();
    }
  }
}

function rellenapueblos() {

  var array = pueblos.responseText.split('+');
  var select = document.getElementsByName('poblacion')[0];

  for (var i = 0; i < array.length; i++) {
    var string = array[i].split(',');
    var option = document.createElement('option');

    option.setAttribute('value', string[0]);
    option.appendChild(document.createTextNode(string[1]));

    select.appendChild(option);
  }
}
