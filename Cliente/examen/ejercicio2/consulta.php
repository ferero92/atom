<?php
  $conn = mysqli_connect("localhost", "fernandorodrigue", "marisma2017", "fernandorodrigue");
  $id = $_GET["id"];

  $query = "SELECT * FROM articulos WHERE id = " . $id;
  $result = mysqli_query($conn, $query);

  while($row = mysqli_fetch_array($result)){

    echo $row["descripcion"] .','. $row["precio"];
  }
 ?>
