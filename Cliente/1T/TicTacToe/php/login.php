<?php include "connect.php"; ?>
<?php
  $email = $_GET["email"];
  $query = "SELECT * FROM players WHERE email = '".$email."'";
  $result = mysqli_query($conn, $query);

  while($row = mysqli_fetch_array($result)){
    echo $row['name'].','.$row['password'].','.$row["gender"];
  }
?>
