<?php
  $conn = mysqli_connect("localhost", "root", "", "ENCUESTA");

  $vote = $_GET["vote"];

  $query = "UPDATE voto SET value = value +1 WHERE name = '" . $vote . "'";
  mysqli_query($conn, $query);

  $votes = "SELECT value FROM voto";
  $result = mysqli_query($conn, $votes);

  while ($row = mysqli_fetch_array($result)) {
    echo $row["value"] . ",";
  }
?>
