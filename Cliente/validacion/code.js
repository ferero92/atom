function ok() {

  var input = document.getElementsByTagName('input');
  var span = document.getElementsByTagName('span');

  clean(span);

  for (var i = 0; i < input.length; i++) {
    if (input[i].value == null || input[i].value == 0) {
      span[i].innerHTML = '!';
      return false
    }
  }
  return true;
}

function clean(array) {

  for (var i = 0; i < array.length; i++) {
    array[i].innerHTML = '';
  }
}
