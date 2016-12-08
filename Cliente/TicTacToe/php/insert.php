<?php include "connect.php"; ?>
<?php
  $email = $_GET["email"];
  $name = $_GET["name"];
  $password = $_GET["password"];
  $gender = $_GET["gender"];

  $query = "INSERT INTO players VALUES(null, '".$email."', '".$name."', '".$password."', '".$gender."', 0)";
  mysqli_query($conn, $query);

  echo $name;
?>
