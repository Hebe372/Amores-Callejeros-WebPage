document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
  });

  var inputs = document.getElementsByClassName('formulario__input');
  for (var i=0; i<inputs.length; i++){
    inputs[i].addEventListener('keyup', function(){
      if(this.value.length>=1){
        this.nextElementSibling.classList.add('fijar');
      }else{
        this.nextElementSibling.classList.remove('fijar');
      }
  })
}

function validarFormulario(evento) {
    evento.preventDefault();
    var nombre = document.getElementById('nombre').value;
    if(nombre.length == 0) {
      alert('No has completado tu nombre');
      return;
    }
    var email = document.getElementById('email').value;
    if(email.length == 0) {
        alert('No has completado tu mail');
        return;
    }
    var informacion = document.getElementById('informacion').value;
    if(informacion.length == 0) {
        alert('No has completado mensaje');
        return;
    }
alert("Muchas gracias por contactarnos");
this.submit();
}

