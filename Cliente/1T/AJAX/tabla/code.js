function code(td) {

  var n = parseInt(td.innerHTML);
  var m = action();

  n += m;

  td.innerHTML = n;

  sum(m);
  color(td);

  if(win(3))
    alert("Felicitaciones");
}

function sum(m) {

  var result = document.getElementById('result');
  var array = document.getElementsByTagName('td');
  var n = 0;

  for (var i = 0; i < array.length; i++) {
    n += parseInt(array[i].innerHTML);
  }
  result.innerHTML = 'Suma total: ' + n;
}

function action() {

  var action = document.getElementsByName('action');

  if(action[0].checked)
    return 1;

  else {
    return -1;
  }
}

function color(td) {

  if(parseInt(td.innerHTML) < 0)
    td.style.backgroundColor = 'red';

  else
    if(td.innerHTML == 0)
      td.style.backgroundColor = 'white';

    else
      td.style.backgroundColor = 'green';
}

function win(row) {

  var celda = document.getElementsByTagName('td');
  var array = [];
  var n = 0;

  for (var i = 0; i < celda.length; i++) {

    n += parseInt(celda[i].innerHTML);

    if(i % row == row -1){
      array.push(n);
      n = 0;
    }
  }
  for (var i = 0; i < array.length -1; i++) {
    if(array[i] != array[i+1])
      return false;
  }
  return true;
}
