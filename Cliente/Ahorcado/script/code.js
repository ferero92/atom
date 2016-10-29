var word;
var mask = [];
var mistakes = 0;
var win = 0;
var lose = 0;
var keyboard = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Ñ', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '+', '+', '+']
var audio = false;

function load(select) {

  var words = document.getElementById(select.value).innerHTML.split(',');
  var i = Math.floor(Math.random() * words.length);

  select.options[0].selected = true;
  document.getElementById('start').className = 'hide';

  word = words[i];
  create();
}

function add() {

  var text = document.getElementsByName('add')[0].value;

  var option = document.createElement('option');
  option.appendChild(document.createTextNode(text));

  var p = document.createElement('p');
  p.setAttribute('id', text);

  document.getElementById('category').appendChild(option);
  document.getElementById('words').appendChild(p);

  document.getElementsByName('add')[0].value = "";

  document.getElementById('start').className = 'hide';
  document.getElementById('custom').className = 'show';
}

function addWord(button) {

  var text = document.getElementsByName('add')[1].value;

  var string = document.getElementById('words').lastChild.innerHTML;

  if(string != "")
    string += ',';

  string += text.toUpperCase();
  document.getElementById('words').lastChild.innerHTML = string;

  document.getElementsByName('add')[1].value = "";
  button.nextSibling.disabled = false;
  button.disabled = true;
}

function create() {

  for (var i = 0; i < word.length; i++) {
    mask.push('-');
  }
  document.getElementById('screen').innerHTML = print(mask);

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

  document.getElementById('game').className = 'show';
}

function turn(letter) {

  var correct = false;
  var color = 'green';
  var img = document.getElementById('hang');
  var result;

  for (var i = 0; i < word.length; i++) {
    if(word[i] == letter.innerHTML){
      mask[i] = word[i];
      correct = true;

      if(audio)
        document.getElementById('coin').play();
    }
  }
  if(!correct){
    mistakes++;
    color = 'red';
    img.src = "img/"+mistakes+".png";
  }
  if(mistakes >= 6){
    lose++;
    document.getElementById('final').src = "img/ahorcado.gif";
    if(audio){
      document.getElementById('music').pause();
      document.getElementById('death').play();
    }

    gameOver('Has perdido');
  }
  if(print(mask) == word){
    win++
    document.getElementById('final').src = "img/win.png";
    gameOver('Has acertado la palabra!');
  }
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

  document.getElementById('hang').src = 'img/horca.png';
  document.getElementById('result').getElementsByTagName('h1')[0].innerHTML = string;

  var span = document.getElementById('result').getElementsByTagName('span');
  var array = [word, win, lose];

  for (var i = 0; i < array.length; i++) {
    span[i].innerHTML = ' ' + array[i] + ' ';
  }

  document.getElementById('game').className = 'hide';
  document.getElementById('result').className = 'show';
}

function enable(input) {

  var text = input.value;

  if(text != null || text != '')
    input.nextSibling.disabled = false;
  else {
    input.nextSibling.disabled = true;
    alert('ok');
  }
}

function restart(node) {

  mistakes = 0;
  word = '';
  mask = [];

  document.getElementsByTagName('table')[0].innerHTML = '';

  if(node.value == 'Jugar de nuevo' && audio){
    document.getElementById('up').play();
    document.getElementById('music').play();
  }


  node.parentNode.parentNode.className = 'hide';
  document.getElementById('start').className = 'show';
}

function sound(img) {

  if(!audio){
    img.src = "img/mute.png";
    document.getElementById('music').play();
    audio = true;
  }
  else{
    img.src = "img/unmute.png";
    document.getElementById('music').pause();
    audio = false;
  }
}
