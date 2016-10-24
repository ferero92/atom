function multiplicate(){

  var number = prompt("Introduce el número del que quieras ver su tabla")
  var string = "";

  for(var i = 0; i <= 10; i++){

    var result = number * i;
    string += number + " x " + i + " = " + result + "<br/>";
  }
  document.write(string);
}
