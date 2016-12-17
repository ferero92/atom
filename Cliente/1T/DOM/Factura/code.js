function factura() {

    var list = document.getElementById('list');

    var row = document.createElement('tr');

    for (var i = 0; i < 4; i++) {
      var td = create(list, i);
      row.appendChild(td);
    }
    var table = document.getElementById('table');
    table.appendChild(row);

    total();

    list.options[0].selected = true;
}

function create(list, n) {

  var td = document.createElement('td');

  switch (n) {
    case 0: td.appendChild(document.createTextNode(list.options[list.selectedIndex].innerHTML));
      return td;
    case 1: input = document.createElement('input');
            input.setAttribute('type', 'text');
            input.setAttribute('value', '1');
            input.setAttribute('onkeyup', 'subtotal(this)');
            td.appendChild(input);
      return td;
    case 2: td.appendChild(document.createTextNode(parseFloat(list.options[list.selectedIndex].value)));
      return td;
    case 3: td.appendChild(document.createTextNode(1 * list.options[list.selectedIndex].value));
      return td;
  }
}

function subtotal(cantidad) {

  var array = cantidad.parentNode.parentNode.getElementsByTagName('td');

  var precio = array[2].innerHTML;
  var subtotal = precio * cantidad.value;

  array[3].innerHTML = subtotal.toFixed(2);

  total();
}

function total() {

  var total = 0;

  var rows = document.getElementsByTagName('tr');

  for (var i = 1; i < rows.length; i++) {
    td = rows[i].getElementsByTagName('td');
    total += parseFloat(td[3].innerHTML);
  }
  document.getElementById('total').innerHTML = total.toFixed(2);
}
