var word;
var mask = [];
var mistakes = 0;
var win = 0;
var lose = 0;
var keyboard = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Ñ', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '+', '+', '+']

function load(select) {

  var words = document.getElementById(select.value).innerHTML.split(',');
  var i = Math.floor(Math.random() * words.length);

  select.options[0].selected = true;
  select.style.visibility = 'hidden';

  word = words[i];
  create();
}

function create() {

  for (var i = 0; i < word.length; i++) {
    mask.push('-');
  }
  document.getElementById('screen').appendChild(document.createTextNode(print(mask)));

  var table = document.getElementsByTagName('table')[0];
  var row = document.createElement('tr');

  for (var i = 0; i < keyboard.length; i++) {
    var td = document.createElement('td');
    if(keyboard[i] != '+'){
      td.appendChild(document.createTextNode(keyboard[i]));
      td.setAttribute('onclick', 'turn(this)');
    }
    row.appendChild(td);
    if((i+1) % 10 == 0 && i != 0){
      table.appendChild(row);
      row = document.createElement('tr');
    }
  }

  document.getElementById('game').style.visibility = 'visible';
}

function turn(letter) {

  var correct = false;
  var color = 'green';
  var result;

  for (var i = 0; i < word.length; i++) {
    if(word[i] == letter.innerHTML){
      mask[i] = word[i];
      correct = true;
    }
  }
  if(!correct){
    mistakes++;
    color = 'red';
  }
  if(mistakes >= 6)
    gameOver('Has perdido');

  if(print(mask) == word)
    gameOver('Has acertado la palabra');

  document.getElementById('screen').innerHTML = print(mask);
  disable(letter, color);
}

function print(string) {

  var print = "";

  for (var i = 0; i < string.length; i++) {
    print += string[i];
  }
  return print;
}

function disable(button, color) {

  button.style.backgroundColor = color;
  button.onclick = '';
}

function gameOver(string) {

  document.getElementById('game').style.visibility = 'hidden';
  document.getElementById('result').style.visibility = 'visible';


}
