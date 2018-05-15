//Funcion para guardar al usuario en la BD
var registrar = function(){

		//Verifica si el tipo de cuenta "tc" es cliente o empleado
		if (tc == "cliente") {
			//Se obtienen los valores del form de clientes
			var usuario = document.getElementById("usuario").value;
			var password = document.getElementById("password").value;
			var email = document.getElementById("mail").value;

			//validaciones
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
				//Llamada a la función para registrar al usuario
				proceso(tc);
			}

		}

		else if (tc == "empleado"){
			//Se obtienen los valores del form de clientes
			var usuario = document.getElementById("usuario").value;
			var password = document.getElementById("password").value;
			var email = document.getElementById("mail").value;
			var clave = document.getElementById("clave").value;

			//valida si la clave de usuario es correcta
			if (clave == "123") {

				if (usuario == "") {
				alert("Introduce un nombre de usuario");
				}
				else if (email == "") {
					alert("Introduce un correo electrónico");
				}
				else if (password == "") {
					alert("Introduce una contraseña");
				}
				else if (clave == "") {
					alert("Introduce la clave de usuario");
				}
				else{
					//Llamada a la función para registrar al usuario
					proceso(tc);
				}
			}
			else{
				alert("La clave de usuario es incorrecta");
			}

		}

		//función para registrar al usuario
		function proceso(tc){

			var tipoc = tc; 

			//crea el nuevo usuario e inicia sesión 
			firebase.auth().createUserWithEmailAndPassword(email, password).then(function(user) {

			  //Obtiene la cuenta del usuario actual	
			  var user = firebase.auth().currentUser;
			  var uid;

			  if (user != null) {
			  	//id único del usuario
			    uid = user.uid; 
			    console.log(uid);
			    console.log(tipoc);

			    //guarda su información personal
			    var refUsuario = firebase.database().ref("usuarios/"+uid);

					refUsuario.set({
				    usuario: usuario,
				    correo: email,
				    password: password,
				    tipo: tipoc
					});

				//espera 800 milisegundos antes de redirigir al usuario	
				setTimeout(function(){redirigir(tipoc)}, 1000);	

			  }

			  }).catch(function(error) {
			  	  console.log('User did not sign up correctly');
			 	  console.log(error.code);
			 });

			  //redirige al usuario segun su tipo de cuenta
			  function redirigir(tipo){
			  	 if (tipo == "cliente") {
					  	console.log("cliente");
					  	window.location = ("cliente.html");
				}else if(tipo == "empleado"){
				  	console.log("empleado");
				  	window.location = ("empleado.html");
				  }
			  }

		}		

	
}	