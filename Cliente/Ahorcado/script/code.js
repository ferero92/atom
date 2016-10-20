var word;
var mask = [];
var mistakes = 0;

function load(select) {

  var words = document.getElementById(select.value).innerHTML.split(',');
  var i = Math.floor(Math.random() * words.length);

  select.options[0].selected = true;
  select.style.visibility = 'hidden';

  word = words[i].split('');
  create();
}

function create() {

  for (var i = 0; i < word.length; i++) {
    mask.push('-');
  }
  document.getElementById('screen').appendChild(document.createTextNode(print(mask)));
  document.getElementById('game').style.visibility = 'visible';
}

function turn(letter) {

  var correct = false;

  for (var i = 0; i < word.length; i++) {
    if(word[i] == letter.innerHTML){
      mask[i] = word[i];
      correct = true;
    }
  }
  if(!correct)
    mistakes++;
    
  if(mistakes >= 6)
    alert('Has perdido');

  if(print(mask) == word)
    alert('Has acertado la palabra');

  document.getElementById('screen').innerHTML = print(mask);
}

function print(string) {

  var print = "";

  for (var i = 0; i < string.length; i++) {
    print += string[i];
  }
  return print;
}
