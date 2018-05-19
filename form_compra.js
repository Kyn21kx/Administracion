
function comprar(){
	
	var nombre = document.getElementById("campo1").value;
	var apellido = document.getElementById("campo2").value;
	var pais = document.getElementById("campo3").value;
	var ciudad = document.getElementById("campo4").value;
	var direccion = document.getElementById("campo5").value;
	var telefono = document.getElementById("campo6").value;
	var Ntarjeta = document.getElementById("campo7").value;


	if (nombre == "") {alert("Introduzca su nombre");}

	else if (apellido == "") {alert("Introduzca su apellido");}

	else if (pais == "") {alert("Introduzca su país");}

	else if (ciudad == "") {alert("Introduzca su ciudad");}

	else if (direccion == "") {alert("Introduzca su direccion");}

	else if (telefono == "") {alert("Introduzca un numero de teléfono");}

	else if (Ntarjeta == "") {alert("Introduzca su número de tarjeta");}

	else {

		var user = firebase.auth().currentUser;
		var userid;

		if (user != null) {
			userid = user.uid; 

			var refTemp = firebase.database().ref("temporal/"+userid);
			refTemp.on('child_added', function(ss){

				var refHist = firebase.database().ref("historial/"+userid);
				var prod = ss.val();
				var keyp = ss.key;

				var updates = {
					producto: prod.producto,
				    precio: prod.precio,
				    codigo: prod.codigo
				};

				refHist.child(keyp).update(updates);

				setTimeout(function(){vaciar(refTemp,userid)}, 400);
			});
		}
  	}
}


function vaciar(refTemp,userid){
	refTemp.remove();
	firebase.database().ref("carritos/"+userid).remove();
	alert("Su compra se ha realizado con exito");
	window.location = ("cliente.html");
}