function ok() {

  var ok = true;

  var input = document.getElementsByTagName('input');
  var span = document.getElementsByTagName('span');
  var select = document.getElementsByTagName('select')[0].selectedIndex;
  var check = document.getElementById('check');

  clean(span);

  for (var i = 0; i < input.length; i++) {
    if (input[i].value == null || input[i].value == 0) {
      span[i].innerHTML = 'Rellene el campo';
      ok = false
    }
  }
  if (select == null || select == 0) {
    span[2].innerHTML = 'Seleccione una provincia';
    ok = false;
  }
  if (!check.checked) {
    span[3].innerHTML = 'Acepte las condiciones';
    ok = false;
  }

  return ok;
}

function clean(array) {

  for (var i = 0; i < array.length; i++) {
    array[i].innerHTML = '';
  }
}
