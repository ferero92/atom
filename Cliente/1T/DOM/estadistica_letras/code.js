var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
 //['a', 'e', 'i', 'o', 'u'];
var times;
var total = 0;

function cuenta() {

  clear();

  var text = document.getElementById('in').value.split("");

  for (var i = 0; i < letters.length; i++) {
    var n = 0;
    for (var j = 0; j < text.length; j++) {
      if(letters[i] == text[j]){
        n++;
      }
    }
    times.push(n);
  }
  print();
}

function print() {

  var string = "";

  for (var i = 0; i < letters.length; i++) {
    if(times[i] != 0)
      string += letters[i] + ': ' + times[i] + ' times ' + porcentage(times[i]) + '%\n';
  }
  document.getElementById('out').value = string;
}

function porcentage(n) {

  return (100 * n / total).toFixed(2);
}

function clear() {

  document.getElementById('out').value = "";
  times = [];
}

function size() {

  total++;
  document.getElementById('total').innerHTML = 'Ha escrito ' + total + ' caracteres';

  if(total >= 50){
    document.getElementById('in').disabled = true;
  }
}
