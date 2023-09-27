let cerrar = document.querySelectorAll(".close")[0];
let abrir = document.querySelectorAll(".cta")[0];
let modal= document.querySelectorAll(".modal")[0];
let modalC = document.querySelectorAll(".modal-container")[0];
let contenidoDinamico = document.getElementById("contenido-dinamico");

abrir.addEventListener("click", function(e){
    e.preventDefault();
    modalC.style.opacity= "1";
    modalC.style.visibility= "visible";
    modal.classList.toggle("modal-close")
    contenidoDinamico.innerHTML = `
    <h3 class="modal_h3">Formulario de Preventa</h3>
    <form class="modal-form" action="procesar.php" method="POST">
        <input class="modal_form_input" type="text" id="nombre" name="nombre" placeholder="nombre" required><br><br>
        <input class="modal_form_input" type="email" id="correo" name="correo" placeholder="correo" required><br><br>   
        <input class="modal_form_input" type="password" id="contrasena" name="contrasena" placeholder="Contraseña" required><br><br>
        <input class="modal_botton" type="submit" value="Enviar">
    </form>
`;

});

let closeModal = function() {
    modal.classList.toggle("modal-close");

    setTimeout(function() {
        modalC.style.opacity = "0";
        modalC.style.visibility = "hidden";
    }, 900);
};

cerrar.addEventListener("click", closeModal);

window.addEventListener("click", function(e) {
    if (e.target == modalC) {
        closeModal();
    }
});
