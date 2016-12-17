var multiplos = "Los multiplos de 23 son: ";
var suma = 0;

for(i = 23; i <= 1000; i++){

  if (i % 23 == 0) {

    multiplos += i + " ";
    suma += i;
  }
}
string = multiplos + "<br>" + "Y la suma de todos ellos da: " + suma;
document.write(string);
