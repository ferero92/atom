function isDNI(){

  var dni = prompt("Introduzca su DNI");
  var number = dni.substring(0, dni.length -1);
  var letter = dni.substring(dni.length -1);
  letter = letter.toUpperCase();
  var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
  var string = "El DNI " + number + letter;

  if (number > 0 && number < 99999999) {

    if (letter == letras[number % letras.length]) {

      alert( string + " es correcto.");
    }
    else{

      alert(string + " es incorrecto.");
    }
  }
}
