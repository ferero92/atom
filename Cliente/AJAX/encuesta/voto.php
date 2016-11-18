<?php
  $conn = mysqli_connect("localhost", "root", "", "ENCUESTA");

  $vote = $_GET["vote"];

  $query = "UPDATE voto SET value = value +1 WHERE name = '" . $vote . "'";
  mysqli_query($conn, $query);

  
?>
