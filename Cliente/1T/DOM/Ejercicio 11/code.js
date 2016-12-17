var links = document.getElementsByTagName('a');
var string;

function nlinks(){
  string += "<p>El número de enlaces en la página es " + links.length + "</p>";
}

function adress(){
  string += "<p>La dirección del penúltimo enlace es " + links[links.length -2] + "</p>";
}

function numberof(){
  var n = 0;
  for (var i in links) {
    if (links[i] == "http//prueba/") {
       n++;
    }
  }
  string += "<p>El número de enlaces que enlazan a http//prueba es " + n + "</p>";
}

function third(){
  var p = document.getElementsByTagName('p');
  var third = p[2].getElementsByTagName('a');

  string += "<p> El número de enlces en el tercer párrafo es " + third.length + "</p>";
}

window.onload = function(){
  nlinks();
  adrees();
  numberof();
  third();

  document.getElementById('informe').innerHTML = string;
}
