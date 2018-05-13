var insertar = function(producto,precio,codigo){

		var prod = producto;
		var price = precio;
		var code = codigo;

		firebase.auth().onAuthStateChanged(function(user) {
		  if (user) {
		  	var uid = user.uid;
		  	var email = user.email;
		  	var name = user.displayName;
			var refUsuario = firebase.database().ref(uid);
		    console.log(email);

		    newref = refUsuario.push();
				newref.set({
			    producto: prod,
			    precio: price,
			    codigo: code
				});
				console.log(prod+" "+price+" "+code);
				console.log(name);
				alert("Se ha añadido al carrito");
				//window.location = ("carrito.html");



		  } else {
		    console.log("Usuario inactivo");
		    window.location = ("login.html");
		  }
		});


}		