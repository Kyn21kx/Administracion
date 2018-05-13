//Funcion para guardar al usuario en la BD
var registrar = function(){
		//Se obtienen los valores del form	
		var usuario = document.getElementById("usuario").value;
		var password = document.getElementById("password").value;
		var email = document.getElementById("mail").value;

		if (usuario == "") {
			alert("Introduce un nombre de usuario");
		}
		else if (email == "") {
			alert("Introduce un correo electrónico");
		}
		else if (password == "") {
			alert("Introduce una contraseña");
		}
		else{


		firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
		  	console.log(error.code);
		});
		

		firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
		   console.log(error.code);
		}); 



		firebase.auth().onAuthStateChanged(function(user) {
		  if (user) {
		  	console.log("Usuario activo");

		  	var uid = user.uid;
			var refUsuario = firebase.database().ref("usuarios/"+uid);

				refUsuario.set({
			    usuario: usuario,
			    correo: email,
			    password: password,
			    tipo:"cliente"
				});


				refUsuario.on('value', function(snapshot) {
				  var cuenta = snapshot.val();

				  var tipo = cuenta.tipo;

				  console.log(tipo);

				 if (tipo == "cliente") {
				  	console.log("cliente");
				  	window.location = ("cliente.html");
				  }else if(tipo == "empleado"){
				  	console.log("empleado");
				  	window.location = ("empleado.html");
				  }


				});

				/*user.updateProfile({
				  displayName: usuario
				}).then(function() {
				  // Update successful.
				  console.log("Update successful");
				}).catch(function(error) {
				  // An error happened.
				  console.log("An error happened");
				});*/

		  	//console.log(user.uid);
			//window.location = ("cliente.html"); 
		  } 
		  else {
		    console.log("Usuario inactivo");
		  }
		});

		//var ref = firebase.database().ref();

		}
}	