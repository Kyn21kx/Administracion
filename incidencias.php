<!DOCTYPE html>
<html>
<head>
	<title>Sistema de incidencias</title>
</head>
<body>
	<center> <h1>Bienvenido al registro de incidencias</h1> </center>
	<br>
	<select id ="select">
		<option selected value="selected">Seleccione al empleado</option>
		<option value="Luis">Luis</option>
		<option value="Juan">Juan</option>
		<option value="Alejandro">Alejandro</option>
		</select>
	<script type="text/javascript">
		var empleado = document.getElementById("select");
		function View () {
			if (empleado.value == "selected"){ 
				Checked();
			}
			else {
				document.getElementById("incidenceSl").hidden = false;
			}
			/*
			switch (empleado) {
				case "Luis":

					break;
			}
			*/

			
		}
		function Checked () {
				alert("Por favor seleccione una opción");
				var vis = document.getElementById("incidenceSl");
				vis.hidden = true;
				vis.value = "selected";
				empleado.value = "selected";
		}

		function Incidence () {

		}

	</script>

	<button onclick="View()">Incidencias</button>
	<br>
	<br>
	<select id ="incidenceSl" hidden="true">
		<option value="selected" selected>Tipo de incidencia</option>
		<option value="falta">Ausencia</option>
		<option value="tardie">Tardanza</option>
		<option value="acta">Incidencia disciplinaria</option>
		</select>
	<button onclick="Incidence()">Incidencias</button>
</body>
</html>