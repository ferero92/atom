function load() {

  if(window.XMLHttpRequest) {
    fichero = new XMLHttpRequest();
  }
  else if (window.ActiveXObject) {
    fichero = new ActiveXObject('Microsoft.XMLHttpRequest');
  }

  fichero.onreadystatechange = show;

  fichero.open('GET', 'http://localhost/alumnos/alumnos.txt', true);
  fichero.send(null);
}

function show() {

  if(fichero.readyState == 4){
    if(fichero.status == 200){
      table();
    }
  }
}

function table() {

  var people = fichero.responseText.split('+');
  var table = document.createElement('table');

  for (var i = 0; i < people.length; i++) {
    var person = people[i].split(',');
    var row = document.createElement('tr');
    for (var j = 0; j < person.length; j++) {
      var td = document.createElement('td');
      td.innerHTML = person[j];
      row.appendChild(td);
    }
    table.appendChild(row);
  }
  document.getElementById('table').appendChild(table);
}
