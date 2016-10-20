function table() {

  var color = ['00', '33', '66', '99', 'CC', 'FF'];

  var table = document.createElement('table');

  for (var i = 0; i < color.length; i++) {
    var row = document.createElement('tr');
    for (var j = 0; j < color.length; j++) {
      for (var k = 0; k < color.length; k++) {
        var td = document.createElement('td');
        td.setAttribute('id', '#' + color[k]+color[j]+color[i]);
        td.style.background = td.id;
        td.setAttribute('onclick', 'color(this)');
        row.appendChild(td);
      }
    }
    table.appendChild(row);
  }

  document.getElementById('table').appendChild(table);
}

function color(td) {

  document.getElementById('color').style.background = td.id;
  document.getElementById('label').innerHTML = td.id;
}
