var codigo;
var descripcion;
var cantidad;
var precio;
var sub;
var base = 0;

function filtrar(id) {

  var url = "http://ieslamarisma.net/proyectos/2017/fernandorodriguez/examen/ejercicio2/consulta.php?id=" + id.value;
  load(url, rellena);
}

function rellena(datos) {

  codigo = document.getElementsByName('id')[0];
  descripcion = document.getElementsByName('descripcion')[0];
  cantidad = document.getElementsByName('cantidad')[0];
  precio = document.getElementsByName('precio')[0];

  if(datos.responseText == "")
    document.getElementsByTagName('span')[0].innerHTML = 'Codigo no valido';
  else{
    descripcion.value = datos.responseText.split(',')[0];
    cantidad.value = 1;
    precio.value = datos.responseText.split(',')[1];

    subtotal();
  }
}

function subtotal() {

  sub = parseInt(cantidad.value) * parseInt(precio.value);
  base += parseInt(sub);
  document.getElementsByTagName('span')[0].innerHTML = sub;
}

function insertar() {

  var table = document.getElementById('compra');
  var row = document.createElement('tr');
  var input = document.getElementsByTagName('form')[0].getElementsByTagName('input');

  for (var i = 0; i < input.length -1; i++) {
    var td = document.createElement('td');
    td.innerHTML = input[i].value;
    row.appendChild(td);
  }
  var td = document.createElement('td');
  td.innerHTML = sub;
  row.appendChild(td);

  table.appendChild(row);

  document.getElementsByTagName('span')[1].innerHTML = base;
  document.getElementsByTagName('span')[2].innerHTML = base * 1.21;
}

function muestra() {

  document.getElementById('articulos').style.visibility = 'visible';
  var url = 'http://ieslamarisma.net/proyectos/2017/fernandorodriguez/examen/ejercicio2/todos.php';
  load(url, completa);
}

function completa(datos) {

  document.getElementById('tbody').innerHTML = datos.responseText;
}

function selecciona(tr) {

  var row = tr.getElementsByTagName('td');
  document.getElementsByName('id')[0].value = row[0].innerHTML;
  document.getElementsByName('descripcion')[0].value = row[1].innerHTML;
  document.getElementsByName('cantidad')[0].value = 1;
  document.getElementsByName('precio')[0].value = row[2].innerHTML;
}
