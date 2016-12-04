var user;
var column = ['left', 'center', 'right'];
var oldcell;
var check = false;

function start() {

  user = 0;

  var container = document.getElementsByClassName('container')[0];
  container.innerHTML = '';

  var table = document.createElement('table');

  for (var i = 0; i < column.length; i++) {
    var tr = document.createElement('tr');
    for (var j = 0; j < column.length; j++) {
      var td = document.createElement('td');
      var img = document.createElement('img');
      img.setAttribute('class', column[j]);
      td.appendChild(img);
      td.setAttribute('onclick', 'turn(this)');
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  container.appendChild(table);
}

function turn(cell) {

  if(user < 6){
    var img = cell.getElementsByTagName('img')[0];
    var src;

    if(user % 2 == 0)
      src = 'img/o.png';
    else
      src = 'img/x.png';

    img.setAttribute('src', src);
  }
  else
    move(cell, src);

    win(cell, src);
    user++;
}

function win(cell, src) {

  var row = cell.parentNode.getElementsByTagName('img');
  var column = document.getElementsByClassName(cell.getElementsByTagName('img')[0].className);
  var cells = document.getElementsByTagName('table')[0].getElementsByTagName('img');

  if(row[0].src == row[1].src && row[1].src == row[2].src && row[2].src != 'img/empty.png'){
    alert('Victoria');
    start();
  }
  if(column[0].src == column[1].src && column[1].src == column[2].src){
    alert('Victoria');
    start();
  }
  if(cells[0].src == cells[4].src && cells[4].src == cells[8].src && cells[8].src != ''){
    alert('Victoria');
    start();
  }
  if(cells[2].src == cells[4].src && cells[4].src == cells[6].src && cells[6].src != ''){
    alert('Victoria');
    start();
  }
}

function move(cell, src) {

  if(!check){

    oldcell = cell;
    oldcell.style.background = 'yellow';
    check = true;
    user--;
  }
  else if(cell.getElementsByTagName('img')[0].src == ''){

    oldcell.getElementsByTagName('img')[0].src = '';
    oldcell.style.background = 'white';

    cell.getElementsByTagName('img')[0].src = src;
  }
}
