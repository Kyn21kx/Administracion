  var ref = firebase.database().ref("productos");
 

  ref.on('child_added', function(ss){
	var prod = ss.val();
	var keyp = ss.key;
	var row = document.createElement('tr');
	row.setAttribute('id',keyp);

	row.innerHTML = '<td class="nom">' + prod.producto + '</td><td class="cantidad">' +  prod.cantidad + '</td><td class="codigo">' 
	+ prod.codigo + '</td><td class="precio">' +  prod.precio +'</td>';

	document.getElementById('tb').appendChild(row);
  });	
