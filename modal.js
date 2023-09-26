let cerrar = document.querySelectorAll(".close")[0];
let abrir = document.querySelectorAll(".cta")[0];
let modal= document.querySelectorAll(".modal")[0];
let modalC = document.querySelectorAll(".modal-container")[0];

abrir.addEventListener("click", function(e){
    e.preventDefault();
    modalC.style.opacity= "1";
    modalC.style.visibility= "visible";
    modal.classList.toggle("modal-close")
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