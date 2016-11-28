<?php
  $conn = mysqli_connect("localhost", "root", "", "ALUMNOS");

  $order = $_GET["order"];
  $desc = $_GET["desc"];

  $query = "SELECT * FROM alumnos ORDER BY " . $order;

  if ($desc == 1) {
    $query .= " DESC";
  }

  $result = mysqli_query($conn, $query);

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
