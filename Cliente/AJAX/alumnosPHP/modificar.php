<?php
  $conn = mysqli_connect("localhost", "root", "", "ALUMNOS");

  $id = $GET_['id'];
  $name = $_POST["name"];
  $direccion = $_POST["direccion"];
  $provincia = $_POST["provincia"];
  $poblacion = $_POST["poblacion"];
  $telefono = $_POST["telefono"];

  $query = "UPDATE alumnos SET nombre='".$name.',`direccion`=[value-3],`provincia`=[value-4],`poblacion`=[value-5],`telefono`=[value-6] WHERE 1"
?>
