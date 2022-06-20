document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
  });
  
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
        alert('No has completado tu mail');
        return;
    }
alert("Muchas gracias por contactarnos");
this.submit();
}