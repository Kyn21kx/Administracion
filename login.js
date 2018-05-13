var ingresar = function(){
		var email = document.getElementById("mail").value;
		var password = document.getElementById("password").value;

		if (email == "") {
			alert("Introduce un correo electrónico");
		}
		else if (password == "") {
			alert("Introduce la contraseña");
		}
		else{

		firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
		   document.write(error.code);
		}); 

		}
	}

	function observador(){

		firebase.auth().onAuthStateChanged(function(user) {
		  if (user) {
		  	console.log("Usuario activo");
		  	var uid = user.uid;
			var refUsuario = firebase.database().ref("usuarios/"+uid);

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

		  } else {
		    console.log("Usuario inactivo");
		  }
		});
	}

	observador();