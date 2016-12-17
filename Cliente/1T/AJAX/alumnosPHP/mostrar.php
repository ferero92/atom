<?php
  $conn = mysqli_connect("localhost", "root", "", "ALUMNOS");

  $mostrar = $_GET['mostrar'];

  $query = 'SELECT * FROM alumnos WHERE id = '.$mostrar;

  $result = mysqli_query($conn, $query);

  $row = mysqli_fetch_array($result);

  echo $row["id"].'+'.$row["nombre"].'+'.$row["direccion"].'+'.$row["provincia"].'+'.$row["poblacion"].'+'.$row["telefono"];
?>
