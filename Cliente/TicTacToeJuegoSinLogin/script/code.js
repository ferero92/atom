var user;
var column = ['l', 'c', 'r'];
var oldcell;
var check = false;

function start() {

  user = 0;

  var container = document.getElementsByClassName('container')[0];
  container.innerHTML = '';

  var table = document.createElement('table');
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

  user++;

  if(user > 4)
    win(cell);

  if(user == 6)
    turn()
}

function win(cell) {

  var row = cell.parentNode.getElementsByTagName('td');
  var column = document.getElementsByClassName(cell.className);
  var cells = document.getElementsByTagName('table')[0].getElementsByTagName('td');

  if(column[0].headers == column[1].headers && column[1].headers == column[2].headers){
    alert('Victoria');
    start();
  }
  if(row[0].className == row[1].className && row[1].className == row[2].className){
    alert('Victoria');
    start();
  }
  if(cells[0].className == cells[4].className && cells[4].className == cells[8].className && cells[8].className != ''){
    alert('Victoria');
    start();
  }
  if(cells[2].className == cells[4].className && cells[4].className == cells[6].className && cells[6].className != ''){
    alert('Victoria');
    start();
  }
}

function turn() {
alert(user);
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

function move(cell) {

  if(!check){
    oldcell = cell;

    check = true;
  }
  else{
    cell.className = oldcell.className;
    oldcell.className = '';
    oldcell.style.backgroundColor = 'white';

    check = false;
    user++;
  }
  turn();
  win(cell);
}
