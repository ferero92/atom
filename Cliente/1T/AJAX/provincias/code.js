var codigo;

function load() {

  if(window.XMLHttpRequest) {
    fichero = new XMLHttpRequest();
  }
  else if (window.ActiveXObject) {
    fichero = new ActiveXObject('Microsoft.XMLHttpRequest');
  }

  fichero.onreadystatechange = show;

  fichero.open('GET', 'http://localhost/provincias/provincias.xml', true);
  fichero.send(null);
}

function show() {

  if(fichero.readyState == 4){
    if(fichero.status == 200){
      select();
    }
  }
}

function select() {

  var select = document.getElementById('provincias');
  var localidad = fichero.responseXML;
  var provincias = localidad.getElementsByTagName('provincia');

  for (var i = 0; i < provincias.length; i++) {
    var option = document.createElement('option');
    option.setAttribute('value', provincias[i].childNodes[1].innerHTML);
    option.innerHTML = provincias[i].childNodes[3].innerHTML;
    select.appendChild(option);
  }
}

function pueblos(select) {

  codigo = select.value;

  if(window.XMLHttpRequest) {
    fichero2 = new XMLHttpRequest();
  }
  else if (window.ActiveXObject) {
    fichero2 = new ActiveXObject('Microsoft.XMLHttpRequest');
  }

  fichero2.onreadystatechange = muestra;

  fichero2.open('GET', 'http://localhost/provincias/pueblos.xml', true);
  fichero2.send(null);
}

function muestra() {

  if(fichero2.readyState == 4){
    if(fichero2.status == 200){
      selected();
    }
  }
}

function selected() {

  var select = document.getElementById('pueblos');
  var option = select.options[0];
  option.parentNode.removeChild(option);

  var municipios = fichero2.responseXML;
  var pueblos = municipios.getElementsByTagName(codigo).getAttribute("codigo");
alert(codigo);
}
