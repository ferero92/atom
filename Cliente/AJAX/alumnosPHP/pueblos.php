<?php
  $conn = mysqli_connect("localhost", "root", "", "ALUMNOS");

  $id = $_GET["id"];

  $query = 'SELECT * FROM municipios WHERE provincia = '.$id;

  $result = mysqli_query($conn, $query);

  while ($row = mysqli_fetch_array($result)) {

    echo $row['id'].','.$row['municipio'].'+';
  }
?>
