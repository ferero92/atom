<?php
  $conn = mysqli_connect("localhost", "root", "", "ALUMNOS");

  $borra = $_GET['borra'];

  $query = 'DELETE alumnos WHERE id = '.borra;

  mysqli_query($conn, $query);
?>
