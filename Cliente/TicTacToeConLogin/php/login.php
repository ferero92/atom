<?php
  $conn = mysqli_connect("localhost", "root", "", "TICTACTOE");
  $email = $_GET["email"];
  $query = "SELECT * FROM players WHERE email = '".$email."'";
  $result = mysqli_query($conn, $query);

  while($row = mysqli_fetch_array($result)){
    echo $row['name'].','.$row['password'];
  }
?>
