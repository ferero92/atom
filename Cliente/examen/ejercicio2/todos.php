<?php
  $conn = mysqli_connect("localhost", "fernandorodrigue", "marisma2017", "fernandorodrigue");
  $query = 'SELECT * FROM articulos';
  $result = mysqli_query($conn, $query);

  while($row = mysqli_fetch_array($result)){

    echo '<tr onclick="selecciona(this)">'.
            '<td>'.$row["id"].'</td>'.
            '<td>'.$row["descripcion"].'</td>'.
            '<td>'.$row["precio"].'</td>'.
          '</tr>';
  }
?>
