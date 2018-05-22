
var length = 0;

//Detecta si el usuario cierra o inicia sesión
firebase.auth().onAuthStateChanged(function(user) {
   if (user) {
	  	console.log("Usuario activo");
		var uid = user.uid;
		var refUsuario = firebase.database().ref("historial/"+uid);
		
		//Llamada a la función para mostrar datos
		mostrar(refUsuario);
		console.log(length);
   } else {
	    console.log("Usuario inactivo");
	    window.location = ("login.html");
   }
});
	

//Función para mostrar datos
function mostrar(refUsuario){

refUsuario.on('child_added', function(ss){
	length++;

	var prod = ss.val();
	var keyp = ss.key;
	var row = document.createElement('tr');
	row.setAttribute('id',keyp);

	//crea una fila en la tabla con los datos del historial
	row.innerHTML = '<td class="prod">' + prod.producto + '</td><td class="code">' +  prod.codigo + '</td><td class="price">' 
	+ prod.precio + '</td>';
	
	//Lo añade a la tabla
	document.getElementById('tb').appendChild(row);
	
});
//espera antes de llamar a la función verifica
setTimeout(function(){verifica()}, 400);	
}


//Verifica si la hay columnas en la tabla
function verifica(){
	if (length == 0) {
	document.getElementById('cont_btn').innerHTML = '<p>No se añadido nada al carrito</p>';
	}
}