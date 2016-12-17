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
      td.setAttribute('onclick', 'turn(this)');
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  container.appendChild(table);
}

function turn(cell) {

  var string = '';

  if(user % 2 == 0)
    string += ' o';
  else
    string += ' x';

  if(user < 6){

    cell.setAttribute('class', string);
    cell.setAttribute('onclick', '');
  }
  else{
    move(cell);
  }
  user++;
  if(user > 4)
    win(cell);
}

function win(cell) {

  var row = cell.parentNode.getElementsByTagName('td');
  var column = document.getElementsByClassName(cell.className);
  var cells = document.getElementsByTagName('table')[0].getElementsByTagName('td');

  if(row[0].className == row[1].className && row[1].className == row[2].className){
    alert('Victoria');
    start();
  }
  if(column[0].headers == column[1].headers && column[1].headers == column[2].headers){
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

function move(cell) {

  if(!check){

    oldcell = cell;
    oldcell.style.borderColor = 'yellow';
    check = true;
    user--;
  }
  else if(cell.className == ''){

    cell.className = oldcell.className;
    oldcell.className = '';
    oldcell.style.borderColor = 'black';

    check = false;
  }
}
