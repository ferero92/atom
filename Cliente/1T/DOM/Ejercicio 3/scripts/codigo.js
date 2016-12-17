function suma(){

  var number = prompt("Introduzca los números a contar");
  var sum = 0;

  for(var i = 0; i <= number; i++){

    sum += i;
  }
  alert("El resultado de sumar los " + number + " primeros números es " + sum);
}
