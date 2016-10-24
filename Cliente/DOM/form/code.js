function create() {

  var campos = document.getElementById('campos').value.split(",");

  remove();

  for (var i = 0; i < campos.length; i++) {
    add(campos[i]);
  }
}

function remove() {

  var p = document.getElementsByTagName('p')[0];
  p.parentNode.removeChild(p);

  var button = document.getElementsByTagName('input')[0];
  button.parentNode.removeChild(button);
}

function add(name) {

  var form = document.getElementById('form');
  var e = document.createElement('p');

  var input = document.createElement('input');
  input.setAttribute('type', 'text');

  e.appendChild(document.createTextNode(name + ":"));
  e.appendChild(input);
  form.appendChild(e);
}
