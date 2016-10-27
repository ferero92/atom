<?php
  $conn = mysqli_connect("localhost", "root", "", "ALUMNOS");

  $order = $_GET["order"];

  $query = "SELECT * FROM alumnos ORDER BY ".$order;

  $result = mysqli_query($conn, $query);

  echo "<table>";

  while ($fila = mysqli_fetch_array($result)) {

    echo "<tr>".
            "<td>".$fila["id"]."</td>".
            "<td>".$fila["nombre"]."</td>".
            "<td>".$fila["direccion"]."</td>".
            "<td>".$fila["provincia"]."</td>".
            "<td>".$fila["poblacion"]."</td>".
            "<td>".$fila["telefono"]."</td>".
          "</tr>";
  }
  echo "</table>";
?>
