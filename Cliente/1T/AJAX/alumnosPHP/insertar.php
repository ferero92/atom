<?php
  $conn = mysqli_connect("localhost", "root", "", "ALUMNOS");

  $name = $_POST["name"];
  $direccion = $_POST["direccion"];
  $provincia = $_POST["provincia"];
  $poblacion = $_POST["poblacion"];
  $telefono = $_POST["telefono"];

  $query = "INSERT INTO alumnos VALUES(null,'".$name."','".$direccion."','".$provincia."','".$poblacion."','".$telefono."')";

  mysqli_query($conn, $query);
 ?>
