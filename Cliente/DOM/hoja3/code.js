function add(string) {

  erase('result');

  var result = document.createElement('div');
  result.setAttribute('id', 'result');

  var array = string.split('?');

  for (var i = 0; i < array.length; i++) {
    var p = document.createElement('p');
    p.appendChild(document.createTextNode(array[i]));
    result.appendChild(p);
  }
  document.body.appendChild(result);
}

function erase(string) {

  var erase = document.getElementById(string);
  erase.parentNode.removeChild(erase);
}

function primero() {

  var word = document.getElementsByName('string')[0].value;
  var array = word.split("");
  var letter = document.getElementsByName('letter')[0].value;
  var n = 0;

  for (var i = 0; i < array.length; i++) {
    if(array[i] == letter)
      n++;
  }
  var text = 'La letra "' + letter + '" se repite ' + n + ' veces en la palabra ' + word;

  add(text);
}

function segundo() {

  var string = document.getElementsByName('string')[1].value;
  var array = string.split("");
  var c = 0;
  var n = 0;
  var sum = 0;

  for (var i = 0; i < array.length; i++) {
    if (isNaN(array[i])) {
      c++;
    }
    else{
      n++;
      sum += parseInt(array[i]);
    }
  }
  var text =  'Letras introducidos: ' + c + '?' +
              'Número introducidos: ' + n + '?' +
              'Suma de los números introducidos: ' + sum;
  add(text);
}
