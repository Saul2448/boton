 // Obtener el modal
 var modal = document.getElementById("loginModal");

 // Obtener el botón que abre el modal
 var btn = document.getElementById("loginBtn");

 // Obtener el <span> que cierra el modal
 var span = document.getElementsByClassName("close")[0];

 // Cuando el usuario haga clic en el botón, abre el modal
 btn.onclick = function() {
     modal.style.display = "block";
 }

 // Cuando el usuario haga clic en <span> (x), cierra el modal
 span.onclick = function() {
     modal.style.display = "none";
 }

 // Cuando el usuario haga clic en cualquier parte fuera del modal, cierra el modal
 window.onclick = function(event) {
     if (event.target == modal) {
         modal.style.display = "none";
     }
 }
