var user;
var column = ['l', 'c', 'r'];
var oldcell;
var check = false;
var player1;
var player2;
var name;
var password;
var machine = false;

function init() {

  player1 = '';
  player2 = '';
  machine = false;

  var loginbtn = document.createElement('button');
  loginbtn.className = 'btn btn-success';
  loginbtn.setAttribute('data-toggle', 'modal');
  loginbtn.setAttribute('data-target', '#login');
  loginbtn.innerHTML = 'Iniciar sesión';

  var singupbtn = document.createElement('button');
  singupbtn.className = 'btn btn-success';
  singupbtn.setAttribute('data-toggle', 'modal');
  singupbtn.setAttribute('data-target', '#singup');
  singupbtn.innerHTML = 'Regístrate';

  var alertdiv = document.createElement('div');
  alertdiv.className = 'alert alert-success';
  alertdiv.hidden = true;

  var container = document.getElementsByClassName('container')[0];
  container.innerHTML = '';
  container.appendChild(loginbtn);
  container.appendChild(singupbtn);
  container.appendChild(alertdiv);
}

function signup() {

  var email = document.getElementsByName('email')[1].value;
  var name = document.getElementsByName('name')[0].value;
  var password = document.getElementsByName('password')[1].value;
  var gender;
  var array = document.getElementsByName('gender');

  for (var i = 0; i < array.length; i++) {
    if(array[i].checked)
      gender = array[i].value;
  }
  var url = 'php/insert.php?email='+email+'&name='+name+'&password='+password+'&gender='+gender;

  load(url, login);
}

function login(ajax) {

  document.getElementsByClassName('alert')[0].innerHTML = ajax.responseText + ' creado con éxito';
  document.getElementsByClassName('alert')[0].hidden = false;
}

function playerEmail(input){

  var url = 'php/login.php?email=' + input.value;

  load(url, controlEmail);
}

function controlEmail(ajax) {

  if(ajax.responseText == ''){
    document.getElementsByTagName('span')[0].style.visibility = 'visible';
  }
  else{
    name = ajax.responseText.split(',')[0];
    password = ajax.responseText.split(',')[1];

    document.getElementsByTagName('span')[0].style.visibility = 'hidden';
    document.getElementsByName('password')[0].disabled = false;
  }
}

function playerPassword(input) {

  if(input.value == password){

    if(player1 == '')
      player1 = name;
    else
      player2 = name;

    document.getElementsByTagName('span')[1].style.visibility = 'hidden';

    if(player2 == '')
      document.getElementsByName('submit')[0].disabled = false;

    document.getElementsByName('submit')[1].disabled = false;
  }
  else{
    document.getElementsByTagName('span')[1].style.visibility = 'visible';
  }
}

function otherPlayer() {

  document.getElementsByName('email')[0].value = '';

  document.getElementsByName('password')[0].value = '';
  document.getElementsByName('password')[0].disabled = true;
  document.getElementsByName('submit')[0].disabled = true;

  var button = document.getElementsByName('submit')[1];
  button.setAttribute('onclick', 'start()');
  button.setAttribute('data-dismiss', 'modal');
  button.innerHTML = 'Jugar';
  button.disabled = true;
}

function oneplayermode() {

  machine = true;
  start();
}

function start() {

  user = 0;

  var container = document.getElementsByClassName('container')[0];
  container.innerHTML = '';

  var table = document.createElement('table');
  table.setAttribute('id', 'game');
  var id = 0;

  for (var i = 0; i < column.length; i++) {
    var tr = document.createElement('tr');
    for (var j = 0; j < column.length; j++, id++) {
      var td = document.createElement('td');
      td.setAttribute('id', id);
      td.setAttribute('headers', column[j]);
      td.setAttribute('onclick', 'place(this)');
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  container.appendChild(table);
}

function place(cell) {

  var string = '';

  if(user % 2 == 0)
    string += 'o';
  else
    string += 'x';

  cell.setAttribute('class', string);
  cell.setAttribute('onclick', '');

  if(user > 3)
    win(cell);

  user++;

  if(machine && user % 2 != 0){
    bad();
  }

  if(user == 6)
    turn()
}

function win(cell) {

  var row = cell.parentNode.getElementsByTagName('td');
  var column = document.getElementsByClassName(cell.className);
  var cells = document.getElementsByTagName('table')[0].getElementsByTagName('td');

  if(column[0].headers == column[1].headers && column[1].headers == column[2].headers){
    score();
  }
  if(row[0].className == row[1].className && row[1].className == row[2].className){
    score();
  }
  if(cells[0].className == cells[4].className && cells[4].className == cells[8].className && cells[8].className != ''){
    score();
  }
  if(cells[2].className == cells[4].className && cells[4].className == cells[6].className && cells[6].className != ''){
    score();
  }
}

function score() {

  var score1;
  var score2;

  if(user % 2 == 0){
    score1 = 10;
    score2 = -5
  }
  else{
    score1 = -5;
    score2 = 10;
  }
  var url = 'php/score.php?player1='+player1+'&player2='+player2+'&score1='+score1+'&score2='+score2;

  load(url, consult);
}

function consult(ajax) {

  var container = document.getElementsByClassName('container')[0];
  container.innerHTML = ajax.responseText;

  var again = document.createElement('button');
  again.setAttribute('onclick', 'start()');
  again.className = 'btn btn-primary col-sm-offset-2';
  again.innerHTML = 'Jugar de nuevo';

  var no = document.createElement('button');
  no.setAttribute('onclick', 'refresh()');
  no.className = 'btn btn-primary';
  no.innerHTML = 'Salir';

  container.appendChild(again);
  container.appendChild(no);
}

function refresh() {

  location.reload();
}

function turn() {

  if(!check){
    var type;

    if(user % 2 == 0)
      type = 'o';
    else
      type = 'x';

    var cells = document.getElementsByTagName('td');
    var elements = document.getElementsByClassName(type);

    for (var i = 0; i < cells.length; i++) {
      cells[i].setAttribute('onclick', '');
      cells[i].style.backgroundColor = 'white';
    }
    for (var i = 0; i < elements.length; i++) {
      elements[i].setAttribute('onclick', 'move(this)');
      elements[i].style.backgroundColor = 'rgb(182, 237, 113)'
    }
  }
  else{
    var cells = document.getElementsByTagName('td');

    for (var i = 0; i < cells.length; i++) {
      if(cells[i].className == ''){
        cells[i].setAttribute('onclick', 'move(this)');
        cells[i].style.backgroundColor = 'rgb(182, 237, 113)';
      }
      else if(cells[i].id != oldcell.id){
        cells[i].setAttribute('onclick', '');
        cells[i].style.backgroundColor = 'white';
      }
      else{
        cells[i].setAttribute('onclick', 'cancel()');
        cells[i].style.backgroundColor = 'rgba(147, 163, 116, 0.37)';
      }
    }
  }
}

function cancel() {

  check = false;
  turn();
}

function bad() {

  var array = document.getElementById('game').getElementsByTagName('td');
  var cells = [];

  if(user < 6){
    for (var i = 0; i < array.length; i++) {
      if(array[i].className == '')
        cells.push(array[i]);
    }
    var i = Math.floor(Math.random() * cells.length);

    place(cells[i]);
  }
  else{
    if(check){
      for (var i = 0; i < array.length; i++) {
        if(array[i].className == '')
          cells.push(array[i]);
      }
    }
    else{
      for (var i = 0; i < array.length; i++) {
        if(array[i].className == 'x')
          cells.push(array[i]);
      }
    }
    var i = Math.floor(Math.random() * cells.length);

    alert(cells[i].id+', '+user);
    move(cells[i]);
  }
}

function move(cell) {

  if(!check){
    oldcell = cell;

    check = true;

    if(machine & user % 2 != 0)
      bad();
  }
  else{
    cell.className = oldcell.className;
    oldcell.className = '';
    oldcell.style.backgroundColor = 'white';

    check = false;
    win(cell);
    user++;

    if(machine & user % 2 != 0)
      bad();
  }
  turn();
}
