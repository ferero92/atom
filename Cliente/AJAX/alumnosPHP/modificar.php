<?php
  $conn = mysqli_connect("localhost", "root", "", "ALUMNOS");

  $id = $POST_['id'];
  $name = $_POST["name"];
  $direccion = $_POST["direccion"];
  $provincia = $_POST["provincia"];
  $poblacion = $_POST["poblacion"];
  $telefono = $_POST["telefono"];
/*
$id = 5;
$name = "name";
$direccion = "direccion";
$provincia = "provincia";
$poblacion = "poblacion";
$telefono = "telefono";
*/
  $query = "UPDATE alumnos SET nombre='".$name."', direccion='".$direccion."', provincia='".$provincia."', poblacion='".$poblacion."', telefono='".$telefono."' WHERE id=".$id;
  mysqli_query($conn, $query);
?>
