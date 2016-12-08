<?php include "connect.php"; ?>
<?php
  $player1 = $_GET["player1"];
  $player2 = $_GET["player2"];
  $score1 = $_GET["score1"];
  $score2 = $_GET["score2"];

  $query1 = "UPDATE players SET score = score + ".$score1." WHERE name = '".$player1."'";
  $query2 = "UPDATE players SET score = score + ".$score2." WHERE name = '".$player2."'";

  mysqli_query($conn, $query1);
  mysqli_query($conn, $query2);

  $query = "SELECT * FROM players ORDER BY score DESC";
  $result = mysqli_query($conn, $query);

  $i = 1;

  echo '<table class="table table-striped">'.
          '<tr>'.
            '<td>Puesto</td>'.
            '<td>Nombre</td>'.
            '<td>Puntuación</td>'.
          '</tr>';

  while($row = mysqli_fetch_array($result)){

    echo '<tr>'.
            '<td>'.$i.'</td>'.
            '<td>'.$row["name"].'</td>'.
            '<td>'.$row["score"].'</td>'.
          '</tr>';
    $i++;
  }
  echo '</table>';
?>
