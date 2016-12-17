<?php
  $conn = mysqli_connect("localhost", "root", "", "ALUMNOS");
  $query = "SELECT * FROM alumnos";

  $result = mysqli_query($conn, $query);

  while($row = mysqli_fetch_array($result)){
    echo $row['id'].','.$row['nombre'].'+';
  }
?>
