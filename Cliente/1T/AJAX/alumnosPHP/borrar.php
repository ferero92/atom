<?php
  $conn = mysqli_connect("localhost", "root", "", "ALUMNOS");

  $borra = $_GET['borra'];

  $query = 'DELETE FROM alumnos WHERE id = '.$borra;

  mysqli_query($conn, $query);

?>
