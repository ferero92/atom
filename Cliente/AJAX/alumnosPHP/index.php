<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Alumnos</title>
  <script src="code.js" charset="utf-8"></script>
</head>
<body>
  <select id="order" onchange="load()">
    <option value="id">--Ordenar por--</option>
    <option value="id">Id</option>
    <option value="nombre">Nombre</option>
    <option value="provincia">Provincia</option>
  </select>
  <form action="" method="post" onsubmit="carga()">
    <p>Nombre:<input type="text" name="name"></p>
    <p>Direccion:<input type="text" name="direccion"></p>
    <p>Provincia:
      <select name="provincia" onchange="cargaPueblos()">
        <?php
          $conn = mysqli_connect("localhost", "root", "", "ALUMNOS");
          $query = 'SELECT * FROM provincias';
          $result = mysqli_query($conn, $query);

          echo "<option value='0'>--Selecciona provincia--</option>";

          while ($row = mysqli_fetch_array($result)) {
            echo "<option value='".$row['id']."'>".$row['provincia']."</option>";
          }
        ?>
      </select>
    </p>
    <p id="poblacion">Poblacion:<select name="poblacion"></select></p>
    <p>Telefono:<input type="text" name="telefono"></p>
    <input type="submit" name="submit" value="Submit">
  </form>
  <div id="find">
    <h1>Buscador:</h1>
    <input type="button" name="name" value="buscar" onclick="alumnos(this)"><input type="text" name="name" style="visibility:hidden" onkeyup="buscar(this)">
    <div id="alumnos"></div>
  </div>
  <div id="table"></div>
</body>
</html>
