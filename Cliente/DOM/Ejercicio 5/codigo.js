function ejercicio8(n){

  var string = "El número " + " es: ";

  if(n % 2 == 0){
    string += "par";
  }
  else{
    string += "impar";
  }
  alert(string);
}

function ejercicio9(sentence){

  var minus = sentence.toLowerCase();
  var mayus = sentence.toUpperCase();
  var string = "La frase estaba escrita ";

  if (minus == sentence) {
    string += "toda en minúsculas";
  }
  else {
    if (mayus == sentence) {
      string += "toda en mayúsculas";
    }
    else {
      string += "tanto en mayúsculas como en minúsculas";
    }
  }
  alert(string);
}

function ejercicio10(sentence){

  sentence = sentence.toLowerCase();
  var array = sentence.split("");
  var yarra = array.reverse();
  var palin = array.join("");
  var nilap = yarra.join("")

  if (palin == nilap) {
    string = "La frase es un palíndromo";
  }
  else{
    string = "La frase no es un palíndromo";
  }
  alert(string);
}
