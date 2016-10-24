var n = 1;

function add() {
  var ul = document.getElementsByTagName('ul');
  var li = document.createElement('li');
  var content = document.createTextNode('Opcion ' + n);
  li.appendChild(content);
  ul.appendChild(li);
  n++;
}

function remove() {
  var li = document.getElementsByTagName('li');

  li[li.length -1].parentNode.removeChild(li[li.length -1]);
}
