function frame(src) {

  var img = document.getElementById('frame').childNodes[1];

  img.src = src;
  img.value = document.getElementById('list').selectedIndex;
}

function select() {

  frame(document.getElementById('list').value);
}

function mini() {

  var div = document.getElementById('mini');
  var list = document.getElementById('list').options;

  for (var i = 1; i < list.length; i++) {
    var mini = document.createElement('img');
    mini.setAttribute('src', list[i].value);
    mini.setAttribute('onclick', 'big(this)');

    div.appendChild(mini);
  }

}

function big(img) {

  frame(img.src);
}

function next() {

  var list = document.getElementById('list').options;
  var img = document.getElementById('frame').childNodes[1];
  var n = parseFloat(img.value) +1;

  if(n == 5)
    n = 1;

  alert(img.value);
  img.value = n;
}
