
var comprobar = function() {
  var nombre=document.getElementById("nombre").value;
  var precio=document.getElementById("precio").value;
  var presentacion=document.getElementById("select").value;
  var descripcion=document.getElementById("descripcion").value;

  if(nombre==""){
  alert("No se ha introducido ningun nombre para el producto");
  }
  else if (precio=="") {
    alert("El producto se va a introducir como GRATIS a la tienda, esta seguro?");
  }
  else if(presentacion=="null"){
    alert("No se ha seleccionado una presentacion para la compra del producto");
  }
  else if(descripcion==""){
    alert("No se ha introducido una descripcion sobre el producto");
  }
  else{
    agregar(nombre,precio,presentacion,descripcion);
    imagenupload();
  }
}

function agregar(nombre,precio,presentacion,descripcion){
  var refProducto=firebase.database().ref('Productos');
  var data = {
    Nombre: nombre,
    Precio: precio,
    Presentacion: presentacion,
    Descripcion: descripcion
  };
  refProducto.push(data);
}

function imagenupload(){

}
