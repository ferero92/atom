var puntuacion = 0;

function empieza() {

  var td = document.getElementById('table').getElementsByTagName('td');

  for (var i = 0; i < td.length; i++) {
    if(td[i].innerHTML == "")
      td[i].style.background = 'grey';
  }

  var valor = document.getElementsByClassName('valor');

  for (var i = 0; i < valor.length; i++) {
    if(valor[i].innerHTML < 5 && valor[i].innerHTML != "")
      valor[i].style.background = 'red';
  }
}

function select(tr) {

  var td = tr.getElementsByTagName('td');

  for (var i = 0; i < td.length; i++) {
    td[i].style.borderColor = 'cyan';
  }
}

function deselect(tr) {

  var td = tr.getElementsByTagName('td');

  for (var i = 0; i < td.length; i++) {
    td[i].style.borderColor = 'black';
  }
}
function muestra(td) {

  document.getElementById('imagen').src = td.innerHTML;
}
function oculta(td) {

  document.getElementById('imagen').src = '';
}

function captura(td) {

  var celdas = td.parentNode.parentNode.getElementsByTagName('td');

  for (var i = 0; i < celdas.length; i++) {
    celdas[i].style.background = 'white';
  }

  td.style.background = 'yellow';
  puntuacion = parseInt(td.innerHTML);
}

function vota(td) {

  td.innerHTML = puntuacion;
  empieza();
}
