firebase.auth().onAuthStateChanged(function(user) {
   if (user) {
	  	console.log("Usuario activo");
		var uid = user.uid;
		var refUsuario = firebase.database().ref(uid);
		mostrar(refUsuario);
   } else {
	    console.log("Usuario inactivo");
	    window.location = ("login.html");
   }
});

	

function mostrar(refUsuario){

refUsuario.on('child_added', function(ss){

	var prod = ss.val();
	var row = document.createElement('tr');

	row.innerHTML = '<td>' + prod.producto + '</td><td>' +  prod.codigo + '</td><td>' + prod.precio + '</td>';
	
	document.getElementById('tb').appendChild(row);
	
});

}

function cerrar(){

		firebase.auth().signOut().then(function() {
		  // Sign-out successful.
		  console.log("Sign-out successful");
		}).catch(function(error) {
		  // An error happened.
		  console.log("An error happened");
		});

}
